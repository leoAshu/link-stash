import { roundButton } from '@assets/index.ts'
const Home = () => {
    return (
        <div className="flex">
            <div className="absolute bottom-5 right-5 h-10 rounded-full shadow-md shadow-[#00000040] cursor-pointer active:scale-[0.9] transition-all ease-in-out duration-300">
                <img src={roundButton} />
            </div>
        </div>
    )
}

export default Home
