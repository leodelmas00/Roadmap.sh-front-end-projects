const picker = datepicker('#date', {
    formatter: (input, date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
        input.value = `${year}-${month}-${day}`
    }
});

const calculateButton = document.querySelector("#calculateButton");
const dateInput = document.querySelector("#date");
const response = document.querySelector("#response");
const isValidDateFormat = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value);

calculateButton.addEventListener("click", () => {

    const birthDate = new Date(dateInput.value);
    const today = new Date();

    if (!dateInput.value || !isValidDateFormat(dateInput.value) || birthDate > today) {
        response.style.color = "red";
        response.textContent = "Select a valid date first";
        dateInput.value = "";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    response.style.color = "";
    response.textContent = `Your age is ${age}`;
})