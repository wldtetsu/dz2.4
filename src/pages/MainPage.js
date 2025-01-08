

import About from '../components/About';
import Title from '../components/Title';

const MainPage = () => {
    const aboutInfo = {
        title: "Some Title",
        body: "Some body"
    };

    return (
        <div>
            <Title text="Hello world" />
            <About info={aboutInfo} />
        </div>
    );
};

export default MainPage;
