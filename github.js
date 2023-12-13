document.addEventListener('DOMContentLoaded', function() {
    var bioText = `
    <style>
   
</style>
    <div id="introContainer" style="padding: 10px; border: 1px solid #ccc; margin: 10px;">
       
        <div style="flex-grow: 1; margin-left: 10px;">
            <p>👋 How's it going, folks! 🚀 I'm Luiz Perez, currently navigating the wild seas of coding as a student at MIT xPro's Full Stack Development course in MERN.</p>
            <p>Yeah, MERN – it's not a secret code; it stands for MongoDB, Express.js, React.js, and Node.js. I promise I'm not just throwing random letters around.</p>
            <p>When I'm not wrestling with code, you can find me sipping coffee and wondering why my cats gives me that judgmental look every time my code breaks. 😼💻</p>
            <p>I'm on a mission to make programming less mysterious and more relatable because, let's face it, coding is like adulting with a side of error messages.</p>
            <p>So, if you're into real talk about coding struggles, occasional victories, and the eternal quest for the missing semicolon, hop on board.</p>
            <p>Check out my repos, drop a comment, or hit me up with your best "Why did the programmer go broke?" joke. Spoiler: Too many bytes! 🤓🔍 #MITxPro #MERNjourney #CodeAndCoffee</p>
            
            <p>GitHub: <a href="https://github.com/luguipe" target="_blank">luguipe</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/luizperez/" target="_blank">Luiz's LinkedIn</a></p>
            <p>Best way to contact me: LinkedIn messages</p>
        </div>
        <img src="GuiWindow.jpg" alt="Luiz Perez" style="max-width: 100%; height: auto; flex-shrink: 0; width: 150px; margin-bottom: 20px;">
    </div>
   
    `;

    const myIntro = document.getElementById("intro");
    myIntro.innerHTML = bioText;
});
