# streamlit_app.py
import streamlit as st
from PIL import Image

# ------------------------ PAGE CONFIG ------------------------
st.set_page_config(page_title="My Portfolio", page_icon="💼", layout="wide")

# ------------------------ CUSTOM CSS ------------------------
st.markdown("""
    <style>
    /* Font & background */
    html, body, [class*="css"]  {
        font-family: 'Segoe UI', sans-serif;
        background-color: #0f0f0f;
        color: #f0f0f0;
    }

    h1, h2, h3 {
        color: #00ffd5;
    }

    a {
        color: #00ffd5;
        text-decoration: none;
    }

    .contact-form input, .contact-form textarea {
        width: 100%;
        padding: 0.75rem;
        margin-top: 0.5rem;
        background: #1f1f1f;
        border: 1px solid #333;
        border-radius: 0.5rem;
        color: white;
    }

    .contact-form button {
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        background-color: #00ffd5;
        color: #000;
        font-weight: bold;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .contact-form button:hover {
        background-color: #00c2a2;
    }

    </style>
""", unsafe_allow_html=True)

# ------------------------ HEADER ------------------------
with st.container():
    st.markdown("##")
    left_col, right_col = st.columns([1, 2])
    with left_col:
        profile_pic = Image.open("assets/profile.jpg")  # update your path here
        st.image(profile_pic, width=220)
    with right_col:
        st.title("Hey, I'm Jane Doe 👋")
        st.subheader("Frontend Developer & UI/UX Enthusiast")
        st.write("I build modern, responsive websites with React, Streamlit, and a passion for user-friendly design.")
       
# ------------------------ ABOUT ME ------------------------
with st.container():
    st.write("---")
    st.header("👩‍💻 About Me")
    st.write("""
        I'm a developer who loves crafting elegant UIs and smooth web experiences.
        My background in design helps me bring both aesthetic and functional value to projects.
    """)

# ------------------------ SKILLS ------------------------
with st.container():
    st.write("---")
    st.header("🛠️ Skills")
    st.write("""
    - **Languages:** JavaScript, Python, HTML5, CSS3
    - **Frameworks:** React, Streamlit, Tailwind CSS
    - **Tools:** Git, Figma, VS Code, Netlify
    - **Soft Skills:** Collaboration, Communication, Attention to Detail
    """)

# ------------------------ PROJECTS ------------------------
with st.container():
    st.write("---")
    st.header("📂 Projects")
    st.write("###")

    project_cols = st.columns(2)

    with project_cols[0]:
        st.subheader("🌤️ Weather App")
        st.write("A React app using OpenWeatherMap API to show real-time weather for cities around the world.")

    with project_cols[1]:
        st.subheader("📊 Portfolio Dashboard")
        st.write("A Streamlit-based dashboard to track project analytics and GitHub activity.")

# ------------------------ CONTACT ------------------------
with st.container():
    st.write("---")
    st.header("📬 Contact Me")
    st.write("Let's connect — I’m currently open to freelance or full-time roles!")

    contact_form = """
    <form class="contact-form" action="https://formsubmit.co/YOUR_EMAIL@gmail.com" method="POST">
         <input type="text" name="name" placeholder="Your name" required>
         <input type="email" name="email" placeholder="Your email" required>
         <textarea name="message" rows="5" placeholder="Your message here" required></textarea>
         <button type="submit">Send</button>
    </form>
    """
    st.markdown(contact_form, unsafe_allow_html=True)
