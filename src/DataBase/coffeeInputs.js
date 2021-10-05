const macroNutrientsInputs = [
    {
        value: 35,
        unit: 'sc/ha',
        label: 'Produtividade Esperada',
        item: 'productivity',
        step: 5,
    },
    {
        value: 3,
        unit: 'm',
        label: 'Distância entre Linhas',
        item: 'distanceLines',
        step: 0.2,
    },
    {
        value: 1,
        unit: 'm',
        label: 'Distância entre Plantas',
        item: 'distancePlants',
        step: 0.1,
    },
    {
        value: 20,
        unit: 'ºC',
        label: 'Temperatura média anual',
        item: 'temperature',
        step: 1,
    },
    {
        value: 8,
        unit: 'P mg/dm³',
        label: 'Fósforo',
        item: 'phosphor',
        step: 2,
    },
    {
        value: 80,
        unit: 'K mg/dm³',
        label: 'Potássio',
        item: 'potassium',
        step: 10,
    },
]

export {
    macroNutrientsInputs
}