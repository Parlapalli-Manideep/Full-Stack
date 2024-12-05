let p = document.querySelector("p")
p.style.fontSize = "45px"
p.style.backgroundColor = "white"
p.style.color = "black"
p.style.margin = "0px 15px"
p.style.padding ="2px 8px"
p.style.borderRadius ="6px"
p.style.fontWeight = "800"

const data = [
"You must be the change you wish to see in the world. -Mahatma Gandhi",
"Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
"The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr",
"Do one thing every day that scares you. -Eleanor Roosevelt",
"Well done is better than well said. -Benjamin Franklin",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
"It is during our darkest moments that we must focus to see the light. -Aristotle",
"Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
"Be yourself; everyone else is already taken. -Oscar Wilde"

]
let b = document.querySelector("button")
b.addEventListener("click",()=>{
    p.textContent = data[Math.floor(Math.random()* data.length)]
})