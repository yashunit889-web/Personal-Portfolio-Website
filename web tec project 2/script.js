/* =====================================================
   DARK MODE
   ===================================================== */

let themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeButton.innerHTML = "☀️";

        } else {

            themeButton.innerHTML = "🌙";

        }

    });

}


/* =====================================================
   SKILL AND PROJECT POPUP
   ===================================================== */

function openModal(title, subtitle, description) {

    let modal = document.getElementById("detailsModal");

    if (!modal) {
        return;
    }

    document.getElementById("modalTitle").innerHTML = title;

    document.getElementById("modalSubtitle").innerHTML = subtitle;

    document.getElementById("modalDescription").innerHTML = description;

    modal.style.display = "flex";
}


/* =====================================================
   CLOSE POPUP
   ===================================================== */

function closeModal() {

    let modal = document.getElementById("detailsModal");

    if (modal) {
        modal.style.display = "none";
    }
}


/* =====================================================
   CLOSE POPUP BY CLICKING OUTSIDE
   ===================================================== */

window.addEventListener("click", function (event) {

    let modal = document.getElementById("detailsModal");

    if (modal && event.target === modal) {

        closeModal();

    }

});


/* =====================================================
   CLOSE POPUP USING ESCAPE KEY
   ===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =====================================================
   CONTACT FORM
   ===================================================== */

let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();

        let email = document.getElementById("email").value.trim();

        let message = document.getElementById("message").value.trim();

        let formMessage = document.getElementById("formMessage");


        /* =================================================
           CHECK EMPTY FIELDS
           ================================================= */

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.innerHTML =
                "Please fill all fields.";

            formMessage.style.color = "red";

            return;
        }


        /* =================================================
           EMAIL VALIDATION
           ================================================= */

        if (!email.includes("@") || !email.includes(".")) {

            formMessage.innerHTML =
                "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }


        /* =================================================
           SUCCESS MESSAGE
           ================================================= */

        formMessage.innerHTML =
            "Thank you, " +
            name +
            "! Your message has been received.";

        formMessage.style.color = "green";


        /* Clear the form */

        form.reset();

    });

}