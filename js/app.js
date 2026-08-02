const gems = document.querySelectorAll(".gem");

gems.forEach(gem => {

    gem.addEventListener("click", () => {

            gems.forEach(g => g.classList.remove("active"));

                    gem.classList.add("active");

                        });

                        });