document.addEventListener('DOMContentLoaded', function() {
    const questionInput = document.getElementById('question');
    const askButton = document.getElementById('askButton');
    const resetButton = document.getElementById('resetButton');
    const magicBall = document.getElementById('magicBall');
    const answerText = document.getElementById('answerText');
    
    let isAnimating = false;

    // Allow Enter key to submit
    questionInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !isAnimating) {
            askQuestion();
        }
    });

    askButton.addEventListener('click', askQuestion);
    resetButton.addEventListener('click', resetBall);

    function resetBall() {
        if (isAnimating) {
            return;
        }
        
        // Reset the ball to show the 8
        magicBall.classList.remove('showing-answer');
        magicBall.classList.remove('shaking');
        answerText.textContent = '';
        questionInput.value = '';
        questionInput.focus();
    }

    async function askQuestion() {
        const question = questionInput.value.trim();
        
        if (!question) {
            alert('Please ask a question first!');
            return;
        }

        if (isAnimating) {
            return;
        }

        isAnimating = true;
        askButton.disabled = true;
        questionInput.disabled = true;

        // Reset the ball to show the 8 first
        magicBall.classList.remove('showing-answer');
        answerText.textContent = '';

        // Wait a brief moment to ensure reset is visible
        await sleep(100);

        // Start shaking animation
        magicBall.classList.add('shaking');

        // Fetch the answer from the backend
        try {
            const response = await fetch('/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question: question })
            });

            if (!response.ok) {
                throw new Error('Failed to get answer');
            }

            const data = await response.json();
            const answer = data.answer;

            // Wait for shake animation to complete (800ms)
            await sleep(800);

            // Remove shake class
            magicBall.classList.remove('shaking');

            // Wait a tiny bit before rotating
            await sleep(100);

            // Set the answer text
            answerText.textContent = answer;

            // Rotate the ball to show the answer
            magicBall.classList.add('showing-answer');

            // Re-enable input after animation completes
            await sleep(1500);
            
        } catch (error) {
            console.error('Error:', error);
            alert('Oops! The Magic 8 Ball is having trouble. Please try again.');
            magicBall.classList.remove('shaking');
        } finally {
            isAnimating = false;
            askButton.disabled = false;
            questionInput.disabled = false;
            questionInput.focus();
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Focus on input when page loads
    questionInput.focus();
});
