import categoryIcons from '../assets/categoryIcons.json';

const selectIconSrc = (id) => {
    let result = categoryIcons.icons.filter((icon) => icon.id.toString() === id.toString() );
    return result[0] ? result[0].src : '';
}

export default selectIconSrc;


