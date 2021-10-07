import { fertilizantesControlLiberation } from "./fertilizantes";

const coffeeMacroCalculation = ({
    productivity,
    distanceLines,
    distancePlants,
    temperature,
    phosphor,
    potassium,
}) => {
    const baseNPK = [
        { label: 'N', min: 6.2, max: 6.2 },
        { label: 'P', min: 0.5, max: 0.5 },
        { label: 'K', min: 5.9, max: 5.9 }
    ];
    let recomendation = baseNPK;

    let plantDensity = 0;

    if (!distancePlants || !distancePlants) {
        plantDensity = 10000
    } else {
        plantDensity = 10000 / (distanceLines * distancePlants);
    }

    const saturation = 315;

    if (plantDensity > 6000) {
        recomendation = recomendation.map((item, key) => {
            return {
                ...item,
                min: item.min - 0.25 * baseNPK[key].min,
                max: item.max - 0.2 * baseNPK[key].max,
            }
        })
    }

    if (temperature > 22) {
        recomendation = recomendation.map((item, key) => {
            if (item.label === 'N') {
                return {
                    ...item,
                    min: item.min + 0.15 * baseNPK[key].min,
                    max: item.max + 0.2 * baseNPK[key].max,
                }
            }
            return { ...item }
        })
    }

    if (temperature < 19) {
        recomendation = recomendation.map((item, key) => {
            if (item.label === 'N') {
                return {
                    ...item,
                    min: item.min - 0.15 * baseNPK[key].min,
                    max: item.max - 0.1 * baseNPK[key].max,
                }
            }
            return { ...item }
        })
    }

    if (phosphor > 10 && phosphor < 20) {
        recomendation = recomendation.map((item, key) => {
            if (item.label === 'P') {
                return {
                    ...item,
                    min: item.min - 0.5 * baseNPK[key].min,
                    max: item.max - 0.5 * baseNPK[key].max,
                }
            }
            return { ...item }
        })
    }

    if (phosphor >= 20) {
        recomendation = recomendation.map((item, key) => {
            if (item.label === 'P') {
                return {
                    ...item,
                    min: 0,
                    max: 0,
                }
            }
            return { ...item }
        })
    }

    if (potassium <= 60) {
        recomendation = recomendation.map((item, key) => {
            if (item.label === 'K') {
                return {
                    ...item,
                    min: item.min + 0.2 * baseNPK[key].min,
                    max: item.max + 0.3 * baseNPK[key].max,
                }
            }
            return { ...item }
        })
    }

    if (potassium >= 110 && potassium < 160) {
        recomendation = recomendation.map((item, key) => {
            if (item.label === 'K') {
                return {
                    ...item,
                    min: item.min - (1 / 3) * baseNPK[key].min,
                    max: item.max - (1 / 3) * baseNPK[key].max,
                }
            }
            return { ...item }
        })
    }

    if (potassium > 160) {
        recomendation = recomendation.map((item, key) => {
            if (item.label === 'K') {
                return {
                    ...item,
                    min: 0,
                    max: 0,
                }
            }
            return { ...item }
        })
    }

    recomendation = recomendation.map((item) => {
        return {
            ...item,
            min: item.min * productivity,
            max: item.max * productivity,
        }
    })

    const Nmax = recomendation[0].max;

    if (Nmax > saturation) {
        recomendation = recomendation.map(item => {
            return {
                ...item,
                min: item.min * (saturation / Nmax),
                max: item.max * (saturation / Nmax),
            }
        })
    }

    const convencionalRecomendation = recomendation.map((item) => {
        if (item.label === 'N') {
            return {
                ...item,
                min: item.min * 1.5,
                max: item.max * 1.7,
            }
        }
        return {
            ...item,
            min: item.min * 1.2,
            max: item.max * 1.3,
        }
    })

    const convencionalRecomendationFilter = [{
        label: 'P/N',
        min: convencionalRecomendation[1].min / convencionalRecomendation[0].max,
        max: convencionalRecomendation[1].max / convencionalRecomendation[0].min,
    }, {
        label: 'K/N',
        min: convencionalRecomendation[2].min / convencionalRecomendation[0].max,
        max: convencionalRecomendation[2].max / convencionalRecomendation[0].min,
    }]

    const controlLiberationRecomendation = recomendation.map((item) => {
        return {
            ...item,
            min: item.min * 1.2,
            max: item.max * 1.3,
        }
    })

    const controlLiberationRecomendationFilter = [{
        label: 'P/N',
        min: controlLiberationRecomendation[1].min / controlLiberationRecomendation[0].max,
        max: controlLiberationRecomendation[1].max / controlLiberationRecomendation[0].min,
    }, {
        label: 'K/N',
        min: controlLiberationRecomendation[2].min / controlLiberationRecomendation[0].max,
        max: controlLiberationRecomendation[2].max / controlLiberationRecomendation[0].min,
    }]

    let fertilizantesControlLiberationRecomendation = fertilizantesControlLiberation.filter(
        fertilizante => (fertilizante.K / fertilizante.N) > controlLiberationRecomendationFilter[1].min && (fertilizante.K / fertilizante.N) < controlLiberationRecomendationFilter[1].max
    );

    fertilizantesControlLiberationRecomendation = fertilizantesControlLiberationRecomendation.filter(
        fertilizante => {
            if (controlLiberationRecomendationFilter[0].max > 0) {
                return fertilizante.P > 0
            }
            return fertilizante.P === 0
        }
    )


    /*
    fertilizantesControlLiberation.forEach(
        fertilizante => {
            if ((fertilizante.K / fertilizante.N) > controlLiberationRecomendationFilter[1].min &&
                (fertilizante.K / fertilizante.N) < controlLiberationRecomendationFilter[1].max) {
                if ((fertilizante.P / fertilizante.N) > controlLiberationRecomendationFilter[0].min &&
                    (fertilizante.P / fertilizante.N) < controlLiberationRecomendationFilter[0].max) {
                    fertilizantesControlLiberationRecomendation.push(fertilizante)
                }
            }
        }
    )
    */
    return { fertilizantesControlLiberationRecomendation };
}

export {
    coffeeMacroCalculation
}