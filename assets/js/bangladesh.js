        const bangladesh = {
          Dhaka: {
            Dhaka: ["Dhanmondi", "Gulshan", "Mirpur", "Uttara", "Savar"],
            Narayanganj: ["Bandar", "Sonargaon", "Rupganj"],
            Gazipur: ["Tongi", "Kaliakoir", "Sreepur"],
          },
          Chattogram: {
            Chattogram: ["Pahartali", "Kotwali", "Double Mooring"],
            CoxsBazar: ["CoxsBazar Sadar", "Ukhia", "Teknaf"],
            Comilla: ["Comilla Sadar", "Chandina", "Debidwar"],
          },
          Khulna: {
            Khulna: ["Sonadanga", "Khalishpur", "Daulatpur"],
            Jessore: ["Jessore Sadar", "Bagherpara", "Chowgacha"],
          },
          Barisal: {
            Barisal: ["Barisal Sadar", "Babuganj", "Bakerganj"],
          },
          Sylhet: {
            Sylhet: ["Sylhet Sadar", "Beanibazar", "Golapganj"],
          },
          Rajshahi: {
            Rajshahi: ["Rajshahi Sadar", "Bagha", "Paba"],
          },
          Rangpur: {
            Rangpur: ["Rangpur Sadar", "Gangachara", "Pirganj"],
          },
          Mymensingh: {
            Mymensingh: ["Mymensingh Sadar", "Bhaluka", "Muktagachha"],
          },
        };
        // Dropdown references
        const divisionSelect = document.getElementById("division");
        const districtSelect = document.getElementById("district");
        const thanaSelect = document.getElementById("thana");

        // Populate division dropdown
        for (let division in bangladesh) {
          const option = document.createElement("option");
          option.value = division;
          option.textContent = division;
          divisionSelect.appendChild(option);
        }

        // When division changes
        divisionSelect.addEventListener("change", function () {
          districtSelect.innerHTML = '<option value="" hidden>Select</option>';
          thanaSelect.innerHTML = '<option value="" hidden>Select</option>';
          const districts = Object.keys(bangladesh[this.value] || {});
          districts.forEach((d) => {
            const option = document.createElement("option");
            option.value = d;
            option.textContent = d;
            districtSelect.appendChild(option);
          });
        });

        // When district changes
        districtSelect.addEventListener("change", function () {
          thanaSelect.innerHTML = '<option value="" hidden>Select</option>';
          const division = divisionSelect.value;
          const thanas = bangladesh[division][this.value] || [];
          thanas.forEach((t) => {
            const option = document.createElement("option");
            option.value = t;
            option.textContent = t;
            thanaSelect.appendChild(option);
          });
        });