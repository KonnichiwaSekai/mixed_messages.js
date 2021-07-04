let messages = {
    'condition':['worst','bad','okay','good','great'],
    'energy':['very low','low','medium','high','very high'],
    'feeling':['very negative','negative','positive','very positive']
}

let start_message = ["Today's condition:", 'Enerty Level:', 'Feeling?']

let count = 0
for(let i in messages){
    console.log(start_message[count], messages[i][Math.floor(Math.random()*Object.values(messages)[count].length-1)])
    
    count +=1
}
// 

/*
시작 문장 리스트를 만들고
메시지 딕셔너리의 길이만큼 반복하는 반복문을 만들어서 
빈 스트링에 시작문장 더하고 메시지도 랜덤으로 뽑아서 더하게끔


1. loop 로 시작 문장 출력되게
    Today's condition:
    Enerty Level:
    Feeling?

2. 
*/