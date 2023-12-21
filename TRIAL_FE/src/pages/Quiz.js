import React, {useState} from 'react';
import '../css/Quiz.css'
import {useNavigate} from "react-router-dom";

const questions = [
    'Hứng thú với công việc tuân theo một bộ quy tắc, thực hiện nhiệm vụ được giao.',
    'Hứng thú với việc lập trình, bảo trì và cung cấp hỗ trợ cho phần mềm hoặc phần cứng của các thiết bị máy tính.',
    "Hứng thú với các dự án mạo hiểm, chấp nhận rủi ro.",
    'Thích đọc và nghiên cứu, sách và văn bản hơn là sử dụng tay. Bạn có xu hướng phân tích tình huống trước khi đưa ra quyết định.',
    'Quan tâm đến các hoạt động nghiên cứu, phát triển và tư vấn liên quan đến vật liệu (nhựa, gỗ, thủy tinh, đất, cát,...).',
    'Hứng thú với các hoạt động nghiên cứu, phát triển và tư vấn liên quan đến thực vật và động vật',
    'Hứng thú với việc bán và tiếp thị sản phẩm',
    'Hứng thú với các hoạt động góp phần tạo nên một thế giới bền vững hơn',
    'Quan tâm đến việc quản lý tài sản và các khoản nợ.',
    'Quan tâm đến việc sử dụng các quy tắc và phương pháp khoa học để giải quyết vấn đề',
    'Quan tâm đến các hoạt động nghiên cứu, phát triển và tư vấn liên quan đến hành vi con người và các tổ chức xã hội.',
    'Quan tâm đến việc gây ảnh hưởng đến ý tưởng của các cá nhân và quản lý một nhóm người trong lĩnh vực chính trị',
    'Hứng thú trong việc giúp đỡ mọi người học hỏi',
    'Bạn có sẵn sàng điều phối hoặc dẫn dắt người khác hoàn thành các hoạt động công việc',
    'Quan tâm đến việc làm việc với các khái niệm định lượng và công thức toán học.',
    'Đam mê, hứng thú với việc viết, tạo ra một chương trình, phần mềm máy tính.',
    'Hứng thú đến việc sử dụng toán học để giải quyết vấn đề.',
    'Quan tâm đến việc phát triển và sử dụng công nghệ để sản xuất và bảo trì mọi thứ.',
    'Quan tâm đến việc tư vấn cho mọi người trong việc đạt được các mục tiêu nghề nghiệp.',
    'Quan tâm đến việc sử dụng logic để xác định điểm mạnh và điểm yếu của các giải pháp.',
    'Mong muốn đưa ra chỉ dẫn và hướng dẫn cho người khác.',
    'Quan tâm đến công việc có thời gian thoải mái và linh động.',
    'Hứng thú với việc chăm sóc động vật.',
    'Có nhu cầu được công nhận với công việc bạn làm.',
    'Hứng thú với việc xây dựng, sửa chữa, sử dụng các công cụ và vật liệu.',
    'Mong muốn có mức lương cao hơn so với những người cùng vị trí.',
    'Mong muốn có những đồng nghiệp dễ hòa đồng.',
    'Hứng thú với việc bảo vệ, đảm bảo an toàn và thực thi các quy định, luật pháp'
]

const userAnswer = new Array(140).fill(0);

// const userAnswer = new Array(questions.length).fill(0);

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const loadQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const handleSelect = (event) => {
            const value = parseInt(event.target.value, 10);
            setSelectedOption(value);
            const buttons = document.getElementsByClassName('select-button')
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i]
                if (button.value !== event.target.value) {
                    button.style['color'] = 'black'
                    button.style['borderColor'] = 'black'
                    button.style['borderWidth'] = '1px'
                    button.style['fontWeight'] = 'normal'
                } else {
                    button.style['color'] = 'red'
                    button.style['borderColor'] = 'red'
                    button.style['borderWidth'] = '2px'
                    button.style['fontWeight'] = 'bold'
                }
            }
        };

        return (
            <div>
                <h1 className="text-black text-[32px] font-extrabold font-['Dela Gothic One'] leading-loose">Quiz
                    #{currentQuestionIndex + 1}</h1>
                <div className="w-[510px] h-[81px] bg-zinc-100 rounded-lg justify-center flex items-center ">
                    <p>{currentQuestion}</p>
                </div>
                <div className="options">
                    <div className="max-w-lg mx-auto">
                        <div className="inline-flex shadow-sm rounded-md" role="group">
                            <button
                                value={1}
                                onClick={handleSelect}
                                type="button"
                                className="select-button rounded-l-lg border border-black bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700">
                                1
                            </button>
                            <button
                                value={2}
                                onClick={handleSelect}
                                type="button"
                                className="select-button border border-black bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700">
                                2
                            </button>
                            <button
                                value={3}
                                onClick={handleSelect}
                                type="button"
                                className="select-button border border-black bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700">
                                3
                            </button>
                            <button
                                value={4}
                                onClick={handleSelect}
                                type="button"
                                className="select-button border border-black bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700">
                                4
                            </button>
                            <button
                                value={5}
                                onClick={handleSelect}
                                type="button"
                                className="select-button rounded-r-md border border-black bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700">
                                5
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const submitAnswer = () => {
        if (selectedOption) {
            userAnswer[currentQuestionIndex] = selectedOption

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption('');

                const buttons = document.getElementsByClassName('select-button')
                for (let i = 0; i < buttons.length; i++) {
                    const button = buttons[i]
                    button.style['color'] = 'black'
                    button.style['borderColor'] = 'black'
                    button.style['borderWidth'] = '1px'
                    button.style['fontWeight'] = 'normal'
                }

            } else {
                navigate('/result', {state: {answer: userAnswer}});
            }
        } else {
            alert('Vui lòng chọn một trong 5 lựa chọn.');
        }
    };

    return (
        <div className="App flex flex-col justify-center items-center">
            {loadQuestion()}
            <div className=" w-32 py-1.5 bg-sky-700 rounded-[100px] hover:bg-red-700 duration-200">
                <button onClick={submitAnswer}
                        className="text-white text-base font-bold font-['Montserrat'] leading-none ">Continue
                </button>
            </div>
            <div
                className="w-[800px] h-[150px]  bg-white rounded-[14px] shadow justify-start items-center  inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start  inline-flex">
                    <div className="self-stretch h-[90px] flex-col justify-start items-start  flex">
                        <div
                            className="self-stretch text-black text-[32px] font-bold font-['Dela Gothic One'] leading-loose"> Guideline
                        </div>
                        <div
                            className="self-stretch text-neutral-500 text-base font-semibold font-['Montserrat'] leading-snug">Từ
                            1-5 hãy chọn theo từ ít hứng thú đến hứng thú nhất
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default App;
