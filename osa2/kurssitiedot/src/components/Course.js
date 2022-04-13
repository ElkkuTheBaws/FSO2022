const Header = ({course}) =>{
    return(
            <h2>
                {course.name}
            </h2>
    )
}

const Content = ({course}) =>{
    return(
        <div>

            {course.parts.map((p, index) => <Part key = {index} parts = {p}/>)}
        </div>
    )
}

const Part = ({parts}) =>{
    //console.log(parts)
    return(
        <div>
            <p>{parts.name} {parts.exercises}</p>

        </div>
    )
}

const Total = ({course}) =>{

    const sum = course.parts.reduce((sum,cur) => sum + cur.exercises, 0)
    console.log(sum)
    return(
        <div>
            <b>total of  {sum} exercises</b>
        </div>
    )
}

const Course = ({course}) =>{
    return(
        <div>
            <Header course = {course}/>
            <Content course = {course}/>
            <Total course = {course}/>
        </div>

    )
}

export default Course