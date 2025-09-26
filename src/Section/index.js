import "./style.css";

const Section = ({ body }) => {
    return (
        <section>
            <div className="section__body">
                {body}
            </div>
        </section>
    )
};

export default Section;