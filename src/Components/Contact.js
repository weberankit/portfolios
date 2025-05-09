import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addData, addQuestion } from "../utils/DataSlice"
import { useEffect ,useState} from "react"
import { motion } from 'framer-motion';
const Contact=()=>{
    const dispatch=useDispatch()
   

    useEffect(()=>{
 dispatch(addQuestion("close"));dispatch(addData("close"))
    },[])

    const [msg, setMsg] = useState(null);
  
    function handleSent(text) {
      let firstInterval;
      let secondInterval;
      async function call() {
        const userText = text;
        firstInterval = setTimeout(() => {
          setMsg("Your message sent . Thanks ");
          secondInterval = setTimeout(() => {
            setMsg("");
          }, 3000);
        }, 700);
        const res = await fetch('https://formsubmit.co/ajax/codingank@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ data: text })
        });
        clearInterval(firstInterval);
        clearInterval(secondInterval);
        setMsg("");
      };
      call();
    }
  
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      message: '',
      email: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const dataString = JSON.stringify(formData);
      handleSent(dataString);
      setFormData({
        name: '',
        phone: '',
        message: '',
        email: '',
      });
    };





    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to={"/"}>
            {" "}
            <div className="text-white text-center font-bold text-sm bg-red-600 rounded-lg p-3 py-2 inline-block ">
              Home
            </div>
          </Link>
          <div className="text-white flex flex-col md:flex-row md:m-2">
            <div className="flex justify-center flex-col m-auto w-[95%] md:w-1/2 ">
              <div className="pt-24">
                <img
                  className="w-40 rounded-3xl"
                  src="Ankitkr.jpg"
                  alt="userimg"
                ></img>
                <p className="p-2 pb-0 font-bold ">Hi,I am Ankit Kumar</p>
                <h4>
                  😊💼 💖 to - FreeLance | Frontend-Work/job | Open Source
                </h4>
              </div>
              <div>
                <h1 className="w-3/4 text-sm font-semibold">
                  I believe 🚀frontend engineering is not limited to JS or
                  ⚛️React, but it has much more, such as security, web
                  accessibility, optimization, and lots more. I'm eager to solve
                  real-world🌐 tech issues.{" "}
                </h1>
              </div>

              <div className="pt-5 font-semibold text-sm">
                <p className="font-extrabold font-sans">About my work: </p>
                <p className="font-serif line-clamp-4 ">
                  What's new in my project? Lots of projects are available 🚀 I
                  have built many projects; some solve real problems, and some
                  are clones. 📄 The AIPDF project is one of my best projects as
                  it solves a real issue. It is the first web project to provide
                  all AiSummarization,dictionary and tanslate with custom api
                  key. 💡 In clone projects, I have added more features that are
                  not present in the real projects. For example: 📺 In my
                  YouTube project, I added dummy comment features like Reddit,
                  where users can reply to each nested level comment. 🎬 In my
                  Netflix clone project, I added PWA and multilingual features.
                  🌟 I believe in being innovative, which is my motto. I love to
                  deep dive into concepts. Technical skill: ReactJS, JavaScript
                  , PWA( progressive web app) , TailwindCSS, CSS, HTML, Git
                </p>
              </div>

              <div className="pt-4">
                <p className="font-extrabold">
                  contact me:🌐codingank@gmail.com
                </p>
                <div>
                  <a
                    href="mailto:codingank@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className=" font-semibold text-sm p-3 py-2 rounded-lg w-12">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ff3333"
                        viewBox="0 0 512 512"
                      >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </button>
                  </a>
                  <a
                    href="https://github.com/weberankit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="  font-semibold text-sm p-3 py-2 rounded-lg w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 496 512"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankitkrs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className=" font-semibold text-sm p-3 py-2 rounded-lg w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#0080ff"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className=" mt-4 w-[95%] md:w-1/3">
              <div className="flex items-center justify-center min-h-screen bg-[#212121]">
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-lg p-8 bg-black rounded-lg shadow-md"
                >
                  <h2 className="mb-6 text-2xl font-semibold text-center text-white">
                    Contact Me
                  </h2>

                  <div className="mb-4 ">
                    <label
                      className="block mb-2 text-sm font-medium "
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4 ">
                    <label
                      className="block mb-2 text-sm font-medium "
                      htmlFor="phone"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4 ">
                    <label
                      className="block mb-2 text-sm font-medium "
                      htmlFor="email"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-6 ">
                    <label
                      className="block mb-2 text-sm font-medium text-black"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      rows="4"
                      required
                    />
                  </div>
                  <p className="text-white">{msg && msg}</p>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-black bg-gray-400 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
}

export default Contact