
let questions = [
    {
        "id": 1,
        "question": "Apa nama proses di mana tumbuhan menghasilkan makanan dengan bantuan cahaya matahari?",
        "answer": "Fotosintesis",
        "options": [
            "Respirasi",
            "Fermentasi",
            "Fotosintesis",
            "Transpirasi"
        ]
    },
    {
        "id": 2,
        "question": "Apa organ tubuh manusia yang berfungsi untuk memompa darah ke seluruh tubuh?",
        "answer": "Jantung",
        "options": [
            "Paru-paru",
            "Jantung",
            "Lambung",
            "Ginjal"
        ]
    },
    {
        "id": 3,
        "question": "Apa yang dimaksud dengan sel?",
        "answer": "Satuan struktural dan fungsional terkecil dalam tubuh makhluk hidup",
        "options": [
            "Satuan terkecil dari unsur kimia",
            "Satuan struktural dan fungsional terkecil dalam tubuh makhluk hidup",
            "Jaringan tubuh makhluk hidup",
            "Organ tubuh makhluk hidup"
        ]
    },
    {
        "id": 4,
        "question": "Apa nama sistem yang mengatur pernapasan manusia?",
        "answer": "Sistem pernapasan",
        "options": [
            "Sistem pencernaan",
            "Sistem pernapasan",
            "Sistem peredaran darah",
            "Sistem saraf"
        ]
    },
    {
        "id": 5,
        "question": "Apa nama bagian sel yang berfungsi sebagai pengatur aktivitas sel?",
        "answer": "Inti sel (nukleus)",
        "options": [
            "Membran sel",
            "Inti sel (nukleus)",
            "Mitokondria",
            "Ribosom"
        ]
    },
    {
        "id": 6,
        "question": "Apa nama proses pembelahan sel yang menghasilkan dua sel anak yang identik?",
        "answer": "Mitosis",
        "options": [
            "Mitosis",
            "Meiosis",
            "Fagositosis",
            "Endositosis"
        ]
    },
    {
        "id": 7,
        "question": "Organ tubuh apa yang berfungsi untuk menyaring limbah dan mengatur keseimbangan cairan tubuh?",
        "answer": "Ginjal",
        "options": [
            "Jantung",
            "Lambung",
            "Ginjal",
            "Paru-paru"
        ]
    },
    {
        "id": 8,
        "question": "Apa yang dimaksud dengan ekosistem?",
        "answer": "Komunitas makhluk hidup dan lingkungan fisiknya yang saling berinteraksi",
        "options": [
            "Komunitas makhluk hidup di bumi",
            "Komunitas makhluk hidup dan lingkungan fisiknya yang saling berinteraksi",
            "Proses peralihan energi dalam tubuh",
            "Tempat tinggal spesies tertentu"
        ]
    },
    {
        "id": 9,
        "question": "Proses perubahan makanan menjadi energi dalam tubuh manusia disebut?",
        "answer": "Respirasi seluler",
        "options": [
            "Fotosintesis",
            "Respirasi seluler",
            "Pencernaan",
            "Transpirasi"
        ]
    },
    {
        "id": 10,
        "question": "Proses pewarisan sifat dari orang tua kepada keturunannya disebut?",
        "answer": "Genetika",
        "options": [
            "Evolusi",
            "Genetika",
            "Metabolisme",
            "Homeostasis"
        ]
    }
]

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}