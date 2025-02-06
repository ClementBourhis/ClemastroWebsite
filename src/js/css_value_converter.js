// get css suffix
export function getSuffix(value) {
    return value.match(/[a-z%]+/)[0];
}

// Convert css value to ' value'px
export function convertValueToPx(value){
    if (typeof value === 'number') {
        return value + 'px';
    } else {
        const unit = value.match(/[a-z]+/)[0];
        const number = parseFloat(value);
        switch (unit) {
        case 'px':
            return number + 'px';
        case 'em':
            return number * 16 + 'px';
        case 'rem':
            return number * 16 + 'px';
        case 'vw':
            return number * window.innerWidth / 100 + 'px';
        case 'vh':
            return number * window.innerHeight / 100 + 'px';
        default:
            return number + 'px';
        }
    }
}

// convert css % value to px
export function convertPercentToPx(value, base){
    if (getSuffix(value) !== '%') {
        return console.error('The value is not a percent value');
    } else {
        const number = parseFloat(value);
        const baseNumber = parseFloat(base);
        return number * baseNumber / 100 + 'px';
    }
}

// getParentSize récupère la taille de l'élément parent
export function getParentSize(childElement) {
    if (!childElement || !childElement.parentElement) {
        console.error("L'élément enfant n'a pas de parent.");
        return null;
    }

    const parentElement = childElement.parentElement;
    const width = parentElement.offsetWidth;
    const height = parentElement.offsetHeight;

    return { width, height };
}
