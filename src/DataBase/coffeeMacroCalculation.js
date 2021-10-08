import { fertilizantesControlLiberation } from "./fertilizantes";

const fertilyzerSelector = (fertilyzerLibrary, recomendation) => {
    const normalizeRecomendation = [
        {
            label: 'P',
            min: recomendation[1].min / recomendation[0].max,
            max: recomendation[1].max / recomendation[0].min,
        },
        {
            label: 'K',
            min: recomendation[2].min / recomendation[0].max,
            max: recomendation[2].max / recomendation[0].min,
        }
    ]

    const normalizeLibrary = fertilyzerLibrary.map(fertilyzer => {
        return { 'P': fertilyzer.P / fertilyzer.N, 'K': fertilyzer.K / fertilyzer.N, }
    });

    const filteredPhosphor = normalizeLibrary.filter(fertilyzer => {
        return !!normalizeRecomendation[0].min === !!fertilyzer.P
    });

    const normalizePotassium = filteredPhosphor.map(fertilyzer => fertilyzer.K).sort((a, b) => a - b);

    const fuzzyArray = normalizePotassium.map((item, index) => {
        if (index === 0) {
            return (number) => {
                if (number <= item) return 100;
                else {
                    let x2 = normalizePotassium[1];
                    let x1 = item;
                    const a = 100 / (x1 - x2);
                    const b = (-x2 * 100) / (x1 - x2);
                    return (a * number + b);
                };
            }
        } else if (index === normalizePotassium.length - 1) {
            return (number) => {
                if (number <= item) {
                    let x2 = normalizePotassium[normalizePotassium.length - 2];
                    let x1 = item;
                    const a = 100 / (x1 - x2);
                    const b = (-x2 * 100) / (x1 - x2);
                    return (a * number + b);
                }
                else {
                    return 100;
                };
            }
        } else {
            return (number) => {
                if (number <= item) {
                    let x2 = normalizePotassium[index - 1];
                    let x1 = item;
                    const a = 100 / (x1 - x2);
                    const b = (-x2 * 100) / (x1 - x2);
                    return (a * number + b);
                }
                else {
                    let x2 = normalizePotassium[index + 1];
                    let x1 = item;
                    const a = 100 / (x1 - x2);
                    const b = (-x2 * 100) / (x1 - x2);
                    return (a * number + b);
                };
            }
        }
    });

    const potassiumMin = fuzzyArray.map(fuzzy => fuzzy(normalizeRecomendation[1].min));
    const potassiumMax = fuzzyArray.map(fuzzy => fuzzy(normalizeRecomendation[1].max));

    const KformulaMin = normalizePotassium[potassiumMin.indexOf(Math.max(...potassiumMin))];
    const KformulaMax = normalizePotassium[potassiumMin.indexOf(Math.max(...potassiumMax))];

    const fertilyzerRecomendation = fertilyzerLibrary.filter(fertilyzer => {
        return (!!normalizeRecomendation[0].min === !!fertilyzer.P)
            && ((fertilyzer.K / fertilyzer.N === KformulaMin)
                || (fertilyzer.K / fertilyzer.N === KformulaMax))
    })

    return fertilyzerRecomendation
}

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

    if (potassium >= 160) {
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

    const controlLiberationRecomendation = recomendation.map((item) => {
        return {
            ...item,
            min: item.min * 1.2,
            max: item.max * 1.3,
        }
    })

    const controlLiberationFertilyzer = fertilyzerSelector(fertilizantesControlLiberation, controlLiberationRecomendation);

    const fertilizantesControlLiberationRecomendation = controlLiberationFertilyzer.map(
        fertilizante => {
            return {
                formula: `${fertilizante.N}-${fertilizante.P}-${fertilizante.K}`,
                qtdHa: {
                    min: Math.min(
                        Math.max(controlLiberationRecomendation[0].min * 100 / (fertilizante.N),
                            controlLiberationRecomendation[2].min * 100 / (fertilizante.K)), Math.min(controlLiberationRecomendation[0].max * 100 / (fertilizante.N), controlLiberationRecomendation[2].max * 100 / (fertilizante.K))),
                    max: Math.max(
                        Math.max(controlLiberationRecomendation[0].min * 100 / (fertilizante.N),
                            controlLiberationRecomendation[2].min * 100 / (fertilizante.K)), Math.min(controlLiberationRecomendation[0].max * 100 / (fertilizante.N), controlLiberationRecomendation[2].max * 100 / (fertilizante.K))),
                },
                qtdPl: {
                    min: Math.min(
                        Math.max(controlLiberationRecomendation[0].min * 100 / (fertilizante.N) / ((plantDensity / 1000)),
                            controlLiberationRecomendation[2].min * 100 / (fertilizante.K)) / ((plantDensity / 1000)), Math.min(controlLiberationRecomendation[0].max * 100 / (fertilizante.N) / ((plantDensity / 1000)), controlLiberationRecomendation[2].max * 100 / (fertilizante.K) / ((plantDensity / 1000)))),
                    max: Math.max(
                        Math.max(controlLiberationRecomendation[0].min * 100 / (fertilizante.N) / ((plantDensity / 1000)),
                            controlLiberationRecomendation[2].min * 100 / (fertilizante.K)) / ((plantDensity / 1000)), Math.min(controlLiberationRecomendation[0].max * 100 / (fertilizante.N) / ((plantDensity / 1000)), controlLiberationRecomendation[2].max * 100 / (fertilizante.K) / ((plantDensity / 1000)))),
                }
            }
        }
    )

    return fertilizantesControlLiberationRecomendation;
}

export {
    coffeeMacroCalculation
}