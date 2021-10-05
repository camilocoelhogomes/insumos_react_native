const coffeeMacroCalculation = ({
    productivity
}) => {
    const baseNPK = [6.2, 0.5, 5.9];
    return baseNPK.map(item => item * productivity);
}

export {
    coffeeMacroCalculation
}