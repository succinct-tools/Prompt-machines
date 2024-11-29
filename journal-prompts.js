let usedPrompts = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generateBtn").addEventListener("click", () => {
        const selectedList = document.getElementById("promptList").value;
        const availablePrompts = prompts[selectedList].filter(prompt => !usedPrompts.includes(prompt));

        if (availablePrompts.length === 0) {
            document.getElementById("prompt").innerText = "No more prompts available in this list.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * availablePrompts.length);
        const randomPrompt = availablePrompts[randomIndex];

        usedPrompts.push(randomPrompt);
        document.getElementById("prompt").innerText = randomPrompt;

        const recentPromptsList = document.getElementById("recent-prompts");
        const listItem = document.createElement("li");
        listItem.innerText = randomPrompt;
        recentPromptsList.appendChild(listItem);
    });
});

const prompts = {
    list1: [
        "About feelings",
        "About life",
        "About friendship",
        "About loneliness",
        "About love",
        "About abandonment",
        "About a loved one",
        "About nature",
        "About skies",
        "About an object",
        "About new years eve",
        "About pain",
        "About happiness",
        "About mistakes",
        "About opportunities",
        "About old times",
        "About loss",
        "About a song",
        "About passion",
        "About dreams",
        "About desire",
        "About a book/movie",
        "About coziness",
        "About differences",
        "About similarities",
        "About calmness",
        "About me",
        "About you",
        "About us",
        "About anything",
    ],
    list2: [
        "Do I like who l am right now?",
        "When was the last time I laughed so hard?",
        "What would I truly regret not doing if I died tonight?",
        "What advice has someone in my family given, and that I have taken just in time?",
        "What were the top three lessons I learned the hard way?",
        "What would I do if my biggest fear came true?",
        "What would I do with my remaining days if l had only a year left to live?",
        "Am I a servant of money, or does money serve me?",
        "Why am I afraid of being true to myself when others are around?",
        "What are the three things that I am most grateful for?",
        "Have I done something recently that I could be proud of?",
        "When was the last time I extended kindness to somebody?",
        "What question do I want to know the answer to if it will help humanity?",
        "What do I really want from life?",
        "What aspect of my personality still needs improvement?",
        "Must I take other people's advice?",
        "What annoys me the most?",
        "Do others find me likeable?",
        "When was the last time I fell head over heels with life?",
        "Am I enriching other people's lives with what I do?",
        "How meaningful is my life?",
        "What makes life meaningful?",
        "Would I lay down my life for somebody?",
        "How much money would I be willing to give to those in need if I won the lottery?",
        "Am I worthy of being loved?",
        "What talents/skills do I have that I can do better than anyone else?",
        "What are the things that put me off?",
        "What is a peaceful life?",
        "What am I most afraid of about life?",
        "If I had not been born, what would be different about the world?",
        "Would I enjoy watching a movie made of my life?",
        "Is my definition of success the same as everyone else's?",
        "Do I have a personal mission?",
        "How would I describe the perfect day?",
        "What am I willing to go the extra mile for?",
        "What are my top five negative habits that I must change to something better?",
        "Who do I look up to?",
    ],
    list3:
    [
        "What am I proud of myself for?",
        "Five things I appreciate about myself are...",
        "What are my biggest goals and dreams?",
        "What makes me unique?",
        "Name three flaws you accept about yourself",
        "What is your biggest struggle with loving yourself, and what can you do about it?",
        "1 am worthy of happiness because...",
        "Think of all the people you feel judged by, and write down why these feelings aren't valid",
        "Write a reference letter for yourself",
        "Write down five hobbies you'd like to try",
        "Name an action you can take right now that your future self will thank you for",
        "Write a positive letter of advice to your future self",
        "Name three ways you can start taking actionable steps toward your dreams",
        "Write down 10 positive affirmations",
        "List three self-care items you'd like to start",
        "Write down five nice things people have said about you recently",
        "How can you better set healthy boundaries in your relationship?",
        "What makes you feel most alive?",
        "What do you need to start saying yes to?",
        "What labels do you assign to yourself?",
        "What compliment do you like to give to people? Give it to yourself",
    ]
      
};