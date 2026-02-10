async function getInsult() {
    // change to grab a separate "generated insult" that will go inside "insult-generator"
    const insultGenerated = document.getElementById('insult-generated');
    // make a button
    try {
        const response = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json');

        if (!response.ok) {
            throw new Error('Ran into a problem: ${response.status}');
        }

        // remember to parse as json here if the built in doesn't work for some reason
        // also refer to specific element names to figure out what to display to which elements.
        const data = await response.json();
        insultGenerated = data.insult;
        console.log(data);

    } catch (error) {
        console.error('Fetch error:', error);
        insultGenerated = 'Failed to load';
    }
}

const insultGetButton = document.getElementById('get-insult-button');

insultGetButton.addEventListener('click', getInsult);