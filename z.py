# streamlit_app.py
import streamlit as st

# --------- PAGE CONFIG ---------
st.set_page_config(page_title="My Portfolio", page_icon=":wave:", layout="wide")

# --------- HEADER SECTION ---------
with st.container():
    st.subheader("Hi, I’m Thaheer 👋")
    st.title("A Frontend Developer with a Passion for UX & Web Design")
    st.write("I'm focused on building fast, accessible, and beautiful web apps.")
    st.write("[LinkedIn](https://linkedin.com/in/yourname) | [GitHub](https://github.com/yourusername)")

# --------- ABOUT ME ---------
with st.container():
    st.write("---")
    st.header("About Me")
    st.write("##")
    st.write("""
        I'm a self-taught frontend developer with a background in design.
        I love turning ideas into reality through code. Let's build something awesome!
    """)

# --------- PROJECTS ---------
with st.container():
    st.write("---")
    st.header("My Projects")
    st.write("##")

    col1, col2 = st.columns(2)
    with col1:
        st.subheader("Portfolio Website")
        st.write("React-based responsive portfolio site.")
        st.write("https://github.com/thaheernitturi/Portfolio.git")

    with col2:
        st.subheader("Weather App")
        st.write("Uses OpenWeather API to show current conditions.")
        st.write("[Live Demo](https://yourweatherapp.live)")

# --------- SKILLS ---------
with st.container():
    st.write("---")
    st.header("Skills")
    st.write("##")
    st.write("""
    - 💻 Languages: JavaScript, Python, HTML, CSS
    - ⚛️ Frameworks: React, Streamlit
    - 🎨 Design: Figma, Adobe XD
    - 🌐 Tools: Git, VS Code, Netlify
    """)

# --------- CONTACT ---------
with st.container():
    st.write("---")
    st.header("Get In Touch")
    st.write("##")
    contact_form = """
    <form action="https://formsubmit.co/YOUR_EMAIL@gmail.com" method="POST">
         <input type="text" name="name" placeholder="Your name" required>
         <input type="email" name="email" placeholder="Your email" required>
         <textarea name="message" placeholder="Your message here" required></textarea>
         <button type="submit">Send</button>
    </form>
    """
    st.markdown(contact_form, unsafe_allow_html=True)
