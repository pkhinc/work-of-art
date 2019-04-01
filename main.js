console.log("get me my container");
let selectElement;

    const fetchContainerType = async () => {
        const containerData = await fetch('https://api.punkapi.com/v2/beers').then(data => data.json());
            console.log(containerData);
        populateContainerSelect(containerData);
    }

    const populateContainerSelect = (types) => {
        select = document.querySelector('.type-select'); 
        const typeOptions = types.map(type => {
            const optionElement = document.createElement('option');
            optionElement.value = type.id;
            optionElement.label = type.name;
            return optionElement;
        })

        typeOptions.forEach(typeOption => {
            
            select.appendChild(typeOption);
        })
    }

    const fillContainerImage = (imageUrl) => {
        document.querySelector('.museum-image')
        .setAttribute('src', imageUrl);
    }


    const getContainerByType = async (typeId) => {
        const [data] = await fetch('https://api.punkapi.com/v2/images/search' 
        + typeId).then(data => data.json());

        const { url } = data;
        fillContainerImage(url);
        console.log(data);
    }

    const changeContainer = () => {
        console.log("I will change container");
        console.log(event.target.value);
        getContainerByType(event.target.value);
    }

fetchContainerType();
