import React from "react";
import { generatePath, Link } from "react-router-dom";
import { PATH } from "../../config/path";
import { Currency } from "../../utils/currency";
import Skeleton from "../Skeleton";

function CourseCards({
    id,
    money,
    title,
    thumbnailUrl,
    long_description,
    short_description,
    slug,
    teacher,
}) {
    //generatePath(course/:slug-id:id),{slug:cfd5-react-js,id:19}=> course/cfd5-react-js-id19
    const path = generatePath(PATH.courseDetail, { slug, id });
    return (
        <div className='col-md-4 course'>
            <div className='wrap'>
                <Link className='cover' to={path}>
                    <img src={thumbnailUrl} alt='' />
                </Link>
                <div className='info'>
                    <Link className='name' to={path}>
                        {title}
                    </Link>
                    <p className='des'>{short_description}</p>
                </div>
                <div className='bottom'>
                    <div className='teacher'>
                        <div className='avatar'>
                            <img src={teacher.avatar} alt='' />
                        </div>
                        <div className='name'>{teacher.title}</div>
                    </div>
                    <a href='/register.html' className='register-btn'>
                        {Currency(money)}đ
                    </a>
                </div>
            </div>
        </div>
    );
}

export const CardLoading = () => {
    return (
        <div className='col-md-4 course'>
            <div className='wrap'>
                <Link className='cover' to='#'>
                    <Skeleton height={230} />
                </Link>
                <div className='info'>
                    <Link className='name' to='#'>
                        <Skeleton height={30} />
                    </Link>
                    <p className='des'>
                        <Skeleton height={80} />
                    </p>
                </div>
                <div className='bottom'>
                    <div className='teacher'>
                        <div className='avatar'>
                            <Skeleton height={30} width={30} shape='circle' />
                        </div>
                        <div className='name'>
                            <Skeleton height={24} width={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCards;
