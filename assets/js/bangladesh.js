    // Bangladesh Location Data
    const bangladeshData = {
        divisions: [
            'Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh'
        ],
        districts: {
            'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj', 'Manikganj', 'Munshiganj', 'Narsingdi', 'Tangail', 'Kishoreganj', 'Faridpur', 'Gopalganj', 'Madaripur', 'Shariatpur', 'Rajbari'],
            'Chittagong': ['Chittagong', 'Cox\'s Bazar', 'Rangamati', 'Bandarban', 'Khagrachhari', 'Feni', 'Lakshmipur', 'Noakhali', 'Brahmanbaria', 'Comilla'],
            'Rajshahi': ['Rajshahi', 'Natore', 'Naogaon', 'Chapainawabganj', 'Pabna', 'Sirajganj', 'Bogra', 'Joypurhat'],
            'Khulna': ['Khulna', 'Jessore', 'Satkhira', 'Meherpur', 'Narail', 'Kushtia', 'Chuadanga', 'Jhenaidah', 'Magura', 'Bagherhat'],
            'Barisal': ['Barisal', 'Bhola', 'Patuakhali', 'Pirojpur', 'Jhalokati', 'Barguna'],
            'Sylhet': ['Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj'],
            'Rangpur': ['Rangpur', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Nilphamari', 'Panchagarh', 'Thakurgaon', 'Lalmonirhat'],
            'Mymensingh': ['Mymensingh', 'Jamalpur', 'Sherpur', 'Netrokona']
        },
        thanas: {
            // Dhaka Division
            'Dhaka': ['Dhanmondi', 'Gulshan', 'Banani', 'Uttara', 'Mirpur', 'Mohammadpur', 'Tejgaon', 'Ramna', 'Motijheel', 'Sabujbagh', 'Khilgaon', 'Paltan', 'Wari', 'Kotwali', 'Sutrapur', 'Hazaribagh', 'Demra', 'Kadamtali', 'Gandaria', 'Kamrangirchar', 'Jatrabari', 'Shyampur', 'Siddheshwari', 'Cantonment', 'Keraniganj', 'Dohar', 'Nawabganj', 'Savar'],
            'Gazipur': ['Gazipur Sadar', 'Kaliakair', 'Kapasia', 'Sreepur', 'Kaliganj'],
            'Narayanganj': ['Narayanganj Sadar', 'Araihazar', 'Sonargaon', 'Bandar', 'Rupganj'],
            'Manikganj': ['Manikganj Sadar', 'Singair', 'Shibalaya', 'Saturia', 'Harirampur', 'Ghior', 'Daulatpur'],
            'Munshiganj': ['Munshiganj Sadar', 'Sreenagar', 'Sirajdikhan', 'Louhajong', 'Gajaria', 'Tongibari'],
            'Narsingdi': ['Narsingdi Sadar', 'Belabo', 'Monohardi', 'Palash', 'Raipura', 'Shibpur'],
            'Tangail': ['Tangail Sadar', 'Sakhipur', 'Basail', 'Madhupur', 'Ghatail', 'Kalihati', 'Nagarpur', 'Mirzapur', 'Gopalpur', 'Delduar', 'Bhuapur', 'Dhanbari'],
            'Kishoreganj': ['Kishoreganj Sadar', 'Bajitpur', 'Austagram', 'Karimganj', 'Katiadi', 'Tarail', 'Pakundia', 'Kuliarchar', 'Hossainpur', 'Itna', 'Mithamain', 'Nikli', 'Bhairab'],
            'Faridpur': ['Faridpur Sadar', 'Alfadanga', 'Boalmari', 'Sadarpur', 'Nagarkanda', 'Bhanga', 'Charbhadrasan', 'Madhukhali', 'Saltha'],
            'Gopalganj': ['Gopalganj Sadar', 'Kashiani', 'Tungipara', 'Kotalipara', 'Muksudpur'],
            'Madaripur': ['Madaripur Sadar', 'Shibchar', 'Kalkini', 'Rajoir', 'Dasar'],
            'Shariatpur': ['Shariatpur Sadar', 'Damudya', 'Naria', 'Zanjira', 'Bhedarganj', 'Gosairhat'],
            'Rajbari': ['Rajbari Sadar', 'Goalanda', 'Pangsha', 'Baliakandi', 'Kalukhali'],

            // Chittagong Division
            'Chittagong': ['Chittagong Sadar', 'Hathazari', 'Raozan', 'Patiya', 'Karnaphuli', 'Anwara', 'Chandanaish', 'Satkania', 'Lohagara', 'Boalkhali', 'Rangunia', 'Mirsharai', 'Sitakunda', 'Sandwip', 'Banshkhali', 'Fatikchhari'],
            'Cox\'s Bazar': ['Cox\'s Bazar Sadar', 'Chakaria', 'Ramu', 'Ukhia', 'Teknaf', 'Moheshkhali', 'Pekua', 'Kutubdia'],
            'Rangamati': ['Rangamati Sadar', 'Kaptai', 'Kawkhali', 'Baghaichhari', 'Barkal', 'Langadu', 'Rajasthali', 'Belaichhari'],
            'Bandarban': ['Bandarban Sadar', 'Thanchi', 'Lama', 'Naikhongchhari', 'Ali Kadam', 'Rowangchhari', 'Ruma'],
            'Khagrachhari': ['Khagrachhari Sadar', 'Dighinala', 'Panchhari', 'Laxmichhari', 'Mohalchhari', 'Manikchhari', 'Ramgarh', 'Guimara'],
            'Feni': ['Feni Sadar', 'Chhagalnaiya', 'Daganbhuiyan', 'Parshuram', 'Sonagazi', 'Fulgazi'],
            'Lakshmipur': ['Lakshmipur Sadar', 'Kamalnagar', 'Raipur', 'Ramgati', 'Ramganj'],
            'Noakhali': ['Noakhali Sadar', 'Chatkhil', 'Begumganj', 'Hatiya', 'Kobirhat', 'Senbagh', 'Sonaimuri', 'Subarnachar', 'Kabirhat'],
            'Brahmanbaria': ['Brahmanbaria Sadar', 'Ashuganj', 'Nasirnagar', 'Nabinagar', 'Sarail', 'Shahbazpur', 'Kasba', 'Akhaura', 'Bancharampur', 'Bijoynagar'],
            'Comilla': ['Comilla Sadar', 'Daudkandi', 'Homna', 'Muradnagar', 'Meghna', 'Titas', 'Burichang', 'Brahmanpara', 'Chandina', 'Chauddagram', 'Debidwar', 'Barura', 'Laksam', 'Nangalkot', 'Monohorgonj', 'Sadar South'],

            // Rajshahi Division
            'Rajshahi': ['Rajshahi Sadar', 'Bagha', 'Bagmara', 'Charghat', 'Durgapur', 'Godagari', 'Mohanpur', 'Paba', 'Puthia', 'Tanore'],
            'Natore': ['Natore Sadar', 'Singra', 'Baraigram', 'Bagatipara', 'Lalpur', 'Gurudaspur', 'Naldanga'],
            'Naogaon': ['Naogaon Sadar', 'Mohadevpur', 'Manda', 'Niamatpur', 'Atrai', 'Raninagar', 'Patnitala', 'Dhamoirhat', 'Sapahar', 'Porsha', 'Badalgachhi'],
            'Chapainawabganj': ['Chapainawabganj Sadar', 'Gomastapur', 'Nachole', 'Bholahat', 'Shibganj'],
            'Pabna': ['Pabna Sadar', 'Sujanagar', 'Ishwardi', 'Bhangura', 'Atgharia', 'Chatmohar', 'Santhia', 'Faridpur', 'Kahaloo'],
            'Sirajganj': ['Sirajganj Sadar', 'Belkuchi', 'Chauhali', 'Kamarkhanda', 'Kazipur', 'Raiganj', 'Shahjadpur', 'Tarash', 'Ullahpara'],
            'Bogra': ['Bogra Sadar', 'Shibganj', 'Sariakandi', 'Sonatala', 'Dhupchanchia', 'Gabtali', 'Sukhanpukur', 'Kahaloo', 'Nandigram', 'Adam dighi', 'Dhunat'],
            'Joypurhat': ['Joypurhat Sadar', 'Akkelpur', 'Kalai', 'Khetlal', 'Panchbibi'],

            // Khulna Division
            'Khulna': ['Khulna Sadar', 'Sonadanga', 'Khalishpur', 'Daulatpur', 'Rupsa', 'Terokhada', 'Dumuria', 'Batiaghata', 'Dacope', 'Paikgachha', 'Fultala', 'Rupsa'],
            'Jessore': ['Jessore Sadar', 'Abhaynagar', 'Bagherpara', 'Chaugachha', 'Jhikargachha', 'Keshabpur', 'Manirampur', 'Sharsha'],
            'Satkhira': ['Satkhira Sadar', 'Assasuni', 'Debhata', 'Kalaroa', 'Kaliganj', 'Shyamnagar', 'Tala'],
            'Meherpur': ['Meherpur Sadar', 'Gangni', 'Mujibnagar'],
            'Narail': ['Narail Sadar', 'Lohagara', 'Kalia'],
            'Kushtia': ['Kushtia Sadar', 'Kumarkhali', 'Khoksa', 'Mirpur', 'Daulatpur', 'Bheramara'],
            'Chuadanga': ['Chuadanga Sadar', 'Alamdanga', 'Damurhuda', 'Jibannagar'],
            'Jhenaidah': ['Jhenaidah Sadar', 'Maheshpur', 'Kaliganj', 'Kotchandpur', 'Shailkupa', 'Harinakundu'],
            'Magura': ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'],
            'Bagherhat': ['Bagherhat Sadar', 'Kachua', 'Mollahat', 'Sarankhola', 'Rampal', 'Morrelganj', 'Mongla', 'Chitalmari'],

            // Barisal Division
            'Barisal': ['Barisal Sadar', 'Bakerganj', 'Babuganj', 'Wazirpur', 'Banaripara', 'Gournadi', 'Agailjhara', 'Mehendiganj', 'Muladi', 'Hizla'],
            'Bhola': ['Bhola Sadar', 'Borhanuddin', 'Char Fasson', 'Daulatkhan', 'Lalmohan', 'Manpura', 'Tazumuddin'],
            'Patuakhali': ['Patuakhali Sadar', 'Bauphal', 'Dashmina', 'Galachipa', 'Kalapara', 'Mirzaganj', 'Dumki', 'Rangabali'],
            'Pirojpur': ['Pirojpur Sadar', 'Nazirpur', 'Kawkhali', 'Zianagar', 'Bhandaria', 'Mathbaria', 'Nesarabad'],
            'Jhalokati': ['Jhalokati Sadar', 'Kathalia', 'Nalchity', 'Rajapur'],
            'Barguna': ['Barguna Sadar', 'Amtali', 'Bamna', 'Betagi', 'Patharghata', 'Taltali'],

            // Sylhet Division
            'Sylhet': ['Sylhet Sadar', 'Beanibazar', 'Bishwanath', 'Dakshin Surma', 'Balaganj', 'Companiganj', 'Fenchuganj', 'Golapganj', 'Gowainghat', 'Jaintiapur', 'Kanaighat', 'Zakiganj', 'Nobigonj'],
            'Moulvibazar': ['Moulvibazar Sadar', 'Barlekha', 'Juri', 'Kamalganj', 'Kulaura', 'Rajnagar', 'Sreemangal'],
            'Habiganj': ['Habiganj Sadar', 'Ajmiriganj', 'Baniachang', 'Bahubal', 'Chunarughat', 'Habiganj Sadar', 'Lakhai', 'Madhabpur', 'Nabiganj'],
            'Sunamganj': ['Sunamganj Sadar', 'South Sunamganj', 'Bishwamvarpur', 'Chhatak', 'Jagannathpur', 'Dowarabazar', 'Tahirpur', 'Dharmapasha', 'Jamalganj', 'Shalla', 'Derai', 'Madhyanagar'],

            // Rangpur Division
            'Rangpur': ['Rangpur Sadar', 'Gangachhara', 'Taraganj', 'Badarganj', 'Mithapukur', 'Pirgachha', 'Kaunia', 'Rangpur Sadar', 'Pirganj'],
            'Dinajpur': ['Dinajpur Sadar', 'Birganj', 'Birampur', 'Parbatipur', 'Bochaganj', 'Kaharole', 'Fulbari', 'Ghoraghat', 'Hakimpur', 'Kaharole', 'Nawabganj', 'Parbatipur'],
            'Gaibandha': ['Gaibandha Sadar', 'Gobindaganj', 'Palashbari', 'Sadullapur', 'Sughatta', 'Sundarganj', 'Phulchhari'],
            'Kurigram': ['Kurigram Sadar', 'Nageshwari', 'Bhurungamari', 'Phulbari', 'Rajarhat', 'Ulipur', 'Chilmari', 'Rowmari', 'Char Rajibpur'],
            'Nilphamari': ['Nilphamari Sadar', 'Saidpur', 'Jaldhaka', 'Kishoreganj', 'Domar', 'Dimla'],
            'Panchagarh': ['Panchagarh Sadar', 'Debiganj', 'Boda', 'Atwari', 'Tetulia'],
            'Thakurgaon': ['Thakurgaon Sadar', 'Pirganj', 'Baliadangi', 'Haripur', 'Ranisankail'],
            'Lalmonirhat': ['Lalmonirhat Sadar', 'Aditmari', 'Kaliganj', 'Hatibandha', 'Patgram', 'Tushbhandar'],

            // Mymensingh Division
            'Mymensingh': ['Mymensingh Sadar', 'Bhaluka', 'Trishal', 'Haluaghat', 'Muktagachha', 'Dhobaura', 'Fulbaria', 'Gaffargaon', 'Gauripur', 'Ishwarganj', 'Nandail', 'Phulpur', 'Tarakanda'],
            'Jamalpur': ['Jamalpur Sadar', 'Melandaha', 'Islampur', 'Dewanganj', 'Sarishabari', 'Madarganj', 'Bokshiganj'],
            'Sherpur': ['Sherpur Sadar', 'Nalitabari', 'Sreebardi', 'Jhenaigati'],
            'Netrokona': ['Netrokona Sadar', 'Atpara', 'Barhatta', 'Durgapur', 'Khaliajuri', 'Kalmakanda', 'Kendua', 'Madan', 'Mohanganj', 'Purbadhala']
        }
    };

    // Populate Divisions
    const divisionSelect = document.getElementById('division');
    const districtSelect = document.getElementById('district');
    const thanaSelect = document.getElementById('thana');

    bangladeshData.divisions.forEach(division => {
        const option = document.createElement('option');
        option.value = division;
        option.textContent = division;
        divisionSelect.appendChild(option);
    });

    // Handle Division Change
    divisionSelect.addEventListener('change', function() {
        const selectedDivision = this.value;

        // Reset district and thana
        districtSelect.innerHTML = '<option value="" hidden>Select</option>';
        thanaSelect.innerHTML = '<option value="" hidden>Select</option>';
        districtSelect.disabled = true;
        thanaSelect.disabled = true;

        if (selectedDivision && bangladeshData.districts[selectedDivision]) {
            districtSelect.disabled = false;
            bangladeshData.districts[selectedDivision].forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    });

    // Handle District Change
    districtSelect.addEventListener('change', function() {
        const selectedDistrict = this.value;

        // Reset thana
        thanaSelect.innerHTML = '<option value="" hidden>Select</option>';
        thanaSelect.disabled = true;

        if (selectedDistrict && bangladeshData.thanas[selectedDistrict]) {
            thanaSelect.disabled = false;
            bangladeshData.thanas[selectedDistrict].forEach(thana => {
                const option = document.createElement('option');
                option.value = thana;
                option.textContent = thana;
                thanaSelect.appendChild(option);
            });
        }
    });
