from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('agroaid  comunity page\homepage.html')

@app.route('/register', methods=['POST'])
def register():
    # Retrieve registration information from the form
    username = request.form['username']
    password = request.form['password']

    # Process the information (you can save it to a database, etc.)
    # For simplicity, we'll just print the information
    print(f"Received registration - Username: {username}, Password: {password}")

    # Return a response (you can redirect or render a new page)
    return "Registration successful!"

if __name__ == '__main__':
    app.run(debug=True)
