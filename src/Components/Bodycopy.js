import { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../App';
import { GenAi } from "../customHooks/GenAi";
import { question } from '../constantCategory';
import RenderAiText from './RenderAiText';
import { addData, addQuestion } from '../utils/DataSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShowCard from "./ShowCard";

const Body = () => {
    const [msg, setMsg] = useState("");
    const [indicate, setIndi] = useState(false);
    const [error, setError] = useState(null);
    const [CardPosition, setCardPosition] = useState(200);

    const dispatch = useDispatch();
    const userInput = useRef(null);
    const scrollRef = useRef(null);
    const selectData = useSelector((store) => store.dataSlice.value);
    const selectQuestion = useSelector((store) => store.dataSlice.question);

    let { img, setImgchange } = useContext(myContext);

    const handleSubmit = useCallback((text) => {
        async function call() {
            const firstInterval = setTimeout(() => {
                setMsg("Ankit will receive your question");
                const secondInterval = setTimeout(() => {
                    setMsg("");
                }, 3000);
                clearTimeout(secondInterval);
            }, 700);
            clearTimeout(firstInterval);

            const res = await fetch('https://formsubmit.co/ajax/codingank@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ data: text })
            });
        }
        call();
    }, []);

    const handleAsk = useCallback(() => {
        if (userInput?.current?.value.trim().length === 0) {
            alert("please ask a question");
            return;
        }
        handleSubmit(userInput.current.value);
        dispatch(addQuestion(userInput.current.value));
        setIndi(true);
        GenAi(question, userInput, setIndi, setError, dispatch, addData);
    }, [handleSubmit]);

    useEffect(() => {
        const timer = setInterval(() => {
            setImgchange({ value: "Ankitkr.jpg" });
        }, 1000);

        const positionTimer = setInterval(() => {
            setCardPosition(() => (window.innerWidth < 600 ? 0 : Math.random() * (window.innerWidth - 100)));
        }, 5000);

        const keypressed = (e) => {
            if (e.key === 'Enter' && userInput?.current?.value) {
                handleAsk();
            }
        };

        window.addEventListener("keydown", keypressed);

        return () => {
            clearInterval(timer);
            clearInterval(positionTimer);
            window.removeEventListener("keydown", keypressed);
        };
    }, [handleAsk]);

    useEffect(() => {
        if (selectQuestion?.length > 1 && scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectQuestion?.length]);

    const closeHandler = useCallback(() => {
        dispatch(addQuestion("close"));
        dispatch(addData("close"));
    }, [dispatch]);

    const keyCloseError = useCallback(() => {
        setError(null);
    }, []);

    return (
        <>
            {selectQuestion?.length > 0 && (
                <div className="p-2 fixed bg-[#212121] font-serif h-96 overflow-y-scroll mx-auto w-full">
                    <div className="w-full md:w-1/2 m-auto">
                        <button className="bg-red-600 rounded-lg text-white font-serif p-1 px-2 fixed" onClick={closeHandler}>
                            close
                        </button>
                        {indicate && <div className="fixed bg-black rounded-2xl text-center font-bold text-white mt-2">Ai Fetching the data, please wait...</div>}
                        {error && (
                            <div className="fixed bg-black rounded-t-xl rounded-b-lg text-sm text-center text-white mt-2 p-1 py-2">
                                <div className="text-black p-1 rounded-lg float-right bg-white hover:bg-gray-600 hover:cursor-pointer" onClick={keyCloseError}>
                                    close
                                </div>
                                {error}
                            </div>
                        )}
                        {selectQuestion.map((item, index) => (
                            <div key={index} className="mb-4 text-white">
                                <span className="text-right bg-[#2f2f2f] p-4 mb-2 rounded-md float-right clear-both project">
                                    {item}
                                    {index === selectQuestion.length - 1 && <a href="#scroll"><span className="bg-black px-1 py-2 text-center rounded-xl hover:bg-white">👇🏿</span></a>}
                                </span>
                                <div ref={index === selectQuestion.length - 1 ? scrollRef : null} className="line-height-[28px] text-[16px] tracking-normal font-normal text-left bg-[#2f2f2f] p-4 rounded-2xl float-left clear-both w-2/3">
                                    {selectData && <RenderAiText selectData={selectData[index]} scrollTo={index === selectData.length - 1 ? "scroll" : null} />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {!selectQuestion.length && (
                <div className="fixed z-[100]" style={{ left: `${CardPosition}px` }}>
                    <ShowCard />
                </div>
            )}

            <div className="text-lime-600 text-sm lg:text-base fixed z-50 top-6 right-[40%] p-10">{msg}</div>

            <div className="text-lg">
                <h1 className="p-2 px-6 font-bold text-white">ChatGpt <span>7.<span className="text-[#ba7bcd]">O</span></span></h1>
            </div>

            <div className="flex justify-center flex-col">
                <div className="pt-72 lg:pt-36 flex flex-col justify-center">
                    <div className="">
                        <img className="w-9 bg-white rounded-md m-auto" src={img.value} alt='img-of-gpt' />
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-xl pt-4 text-center">How can I help you today?</h2>
                    </div>
                </div>

                <div className="text-white flex flex-col justify-center md:m-20 mb-6 md:mb-0 pt-24 lg:pt-0">
                    <div className="m-2 lg:m-0 w-full flex flex-col sm:flex-row justify-center pt-8 md:pt-0">
                        <Link to={"/project"}>
                            <div className="w-full md:w-72 mb-2 md:mb-0 p-1 px-4 pr-32 border rounded-xl bordergpt text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer">
                                check my project <h5 className="text-xs gpt">just click one time</h5>
                            </div>
                        </Link>
                        <Link to={"contact"}>
                            <div className="ml-0 md:ml-2 w-full md:w-72 p-1 px-4 pr-32 border rounded-xl bordergpt text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer">
                                contact me <h5 className="text-xs gpt">to know about me</h5>
                            </div>
                        </Link>
                    </div>

                    <div className="m-2 mt-0 lg:m-0 w-full flex flex-col sm:flex-row justify-center pt-2">
                        <Link to={"/skill"}>
                            <div className="w-full sm:w-72 md:w-72 mb-2 md:mb-0 p-1 px-4 pr-32 border rounded-xl bordergpt text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer">
                                check my skill <h5 className="text-xs gpt">top-notch skill</h5>
                            </div>
                        </Link>
                        <a href="https://medium.com/@codingank" rel='noopener noreferrer' target='_blank'>
                            <div className="hidden sm:block ml-0 md:ml-2 w-full md:w-72 p-1 px-4 pr-32 border rounded-xl bordergpt text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer">
                                Technical Blog by me <h5 className="text-xs gpt">Understand the concept</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="relative media text-center mb-7 bg-[#212121] border bordergpt w-full sm:w-1/2 m-auto rounded-l-2xl rounded-r-2xl mt-0 sm:mt-16">
                    <span className='text-xs text-white absolute right-0 top-[-2px] z-50 p-[1px] rounded-l-md bg-black'>Beta✨</span>

                    <textarea
                        ref={userInput}
                        className='out p-1 met w-4/5 text-white bg-[#212121] rounded-lg rounded-r-xl pt-2 pb-0 mt-1 no-scrollbar'
                        rows="1" cols="3"
                        type="text"
                        name="name"
                        placeholder='Ask me Anything About me'
                        autoComplete="on"
                        required
                    />
                    {!indicate ? (
                        <button type='submit' className='bg-white p-3 mb-1 mt-1 rounded-xl hover:bg-black hover:text-white text-xs md:text-sm mr-0 md:mr-3 float-right' onClick={handleAsk}>
                            Ask me
                        </button>
                    ) : (
                        <button type="submit" className='hover:cursor-wait p-3 mb-1 mt-1 rounded-xl text-xs md:text-sm mr-0 md:mr-3 float-right shadow-2xl animate-pulse bg-gray-700 text-white'>
                            .....
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Body;
