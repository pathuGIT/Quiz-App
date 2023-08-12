
quis_list = [
    ["who is precident?",
    [
        {ans:"Gota",correct:false},
        {ans:"Mahinda",correct:false},
        {ans:"Ranil",correct:true},
        {ans:"maithree",correct:false}
    ]],
    ["who is Mother?",
    [
        {ans:"nalini",correct:false},
        {ans:"rani",correct:false},
        {ans:"Rayomi",correct:false},
        {ans:"manike",correct:true}
    ]]
]

arr = 0;
length_of_array = quis_list.length;
score = 0;
function showQuestion(){
    //Clear before questions
    document.getElementById("question").innerHTML = "";
    document.getElementById("answers").innerHTML = "";
    //Show question
    document.getElementById('question').append(arr+1," ",quis_list[arr][0])
    document.getElementById("total_ques").innerHTML = "Total Questins: " +length_of_array;
    //Show answers 
    let parent = document.createElement("div");parent.className = "w3-mobile";
    i=0;
    for(i; i<4; i++){
        //Show answers
        let mydiv = document.createElement("div"); mydiv.className = "w3-panel w3-padding-16 w3-pale-green w3-mobile";
        let myinput1 = document.createElement("input"); myinput1.type = "radio"; myinput1.name = "answer"; myinput1.value = i; myinput1.className="w3-radio w3-margin-right"
        let mylabel1 = document.createElement("label");mylabel1.textContent = quis_list[arr][1][i].ans;
        mydiv.appendChild(myinput1);
        mydiv.appendChild(mylabel1);
        parent.appendChild(mydiv)
    }
    document.getElementById("answers").append(parent);
    arr++;
}

function check(){
    let selectedAns = document.querySelector('input[name="answer"]:checked').value;
    if(quis_list[arr-1][1][selectedAns].correct){
        score++;
    }
}

function next(){
    check()
    if(arr<length_of_array){ 
        showQuestion();
        
    }else{      
        //Clear before questions
        document.getElementById("question").innerHTML = "";
        document.getElementById("answers").innerHTML = "";

        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("submitBtn").style.display = "block";       
    }
    
}

function submit(){
    document.getElementById("score").innerHTML = 'Your score is = '+score;
    document.getElementById("submitBtn").style.display = 'none';
}

showQuestion();

