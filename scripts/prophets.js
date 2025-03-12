// cargo el archivo json 
fetch('data/prophets.json')
    .then(response => response.json())
    .then(data => {

        const prophets = data.prophets; // Accede a la lista de profetas
        console.log(prophets)
        const cardSection = document.querySelector('.card'); // Contenedor donde se encuentran los profetas

        // Iterar sobre los datos de profetas
        prophets.forEach(prophet => {

            console.log(prophet.name)

            // clonar el template
            const template = document.getElementById('prophet-card');
            const clone = template.content.cloneNode(true);

            //llena datos en el template clonado
            clone.querySelector('h2').textContent = (`${prophet.name} ${prophet.lastname}`);
            clone.querySelector('.birthDate').textContent = (`${prophet.birthdate}`);
            clone.querySelector('.birthPlace').textContent = (`${prophet.birthplace}`);
            clone.querySelector('.profile').src = (`${prophet.imageurl}`);

            //Inserta el nuevo contenido a la section cards
            cardSection.appendChild(clone);

        });

    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));