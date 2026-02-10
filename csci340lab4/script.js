async function getInsult() {
    const insultElement = document.getElementById('insult-generated');
    const button = document.getElementById('get-insult-button');

    insultElement.textContent = "Generating...";
    button.disabled = true;

    try {
        const response = await fetch('https://evilinsult.com/generate_result.php?lang=en&type=json');

        if (!response.ok) {
            throw new Error('Error!  Status: ${response.status}');
        }

        const data = await response.json();
        console.log(data)

        insultElement.textContent = data.insult;
    }
    catch (error) {
        console.error('Fetch error:', error);
        insultElement.textContent = 'Failed to load insult.';
    }
    finally {
        button.disabled = false;
    }
}

const insultGetButton = document.getElementById('get-insult-button');

insultGetButton.addEventListener('click', getInsult);

