
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex mb-4 bg-slate-100 p-2 rounded-md font-semibold'>
            <button className='btn btn-secondary'>Latest</button>
            <Marquee >
                <Link className='mx-5' to='/'> I can be a React component, multiple React components, or just some text. </Link>
                <Link className='mx-5' to='/'> I can be a React component, multiple React components, or just some text. </Link>
                <Link className='mx-5' to='/'> I can be a React component, multiple React components, or just some text. </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;