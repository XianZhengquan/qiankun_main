import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import './index.less';

const ILayout: React.FC = ({children}) => {
    const history = useHistory();
    const location = useLocation();

    // 切换子应用
    function changeMicro(microPath: string) {
        history.push(microPath);
    }

    return (
        <article className='i-layout'>
            <section className="menu-wrap">
                <div onClick={_ => changeMicro('/react')}>react 应用</div>
            </section>
            <section className="container">
                {location.pathname !== '/react' && children}
                <section id="frame" style={{display: location.pathname === '/' ? 'none' : 'block'}} />
            </section>
        </article>
    );
};

export default ILayout;
