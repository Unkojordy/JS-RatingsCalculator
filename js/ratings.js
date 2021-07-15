function collect_ratings() {
    const ratings = {
        count: 0,
        sum: 0,
        average: 0
    };

    let rating = 0;

    


const element = [...document.querySelectorAll('ratings')]

elements.forEach((element) => {
    
    rating = parseInt(element.id.replace('star', ' '));
    ratings[0] = parseInt(element.value)
    ratings[1] = parseInt(element.value * rating);
});

if (ratings[0] != 0) {
    ratings[2] =+ ratings[0]
}

return collect_ratings();

}

addEventListener('change', (event) => {
    const ratings = collect_ratings();
    ratings.average = querySector('#average');
})
