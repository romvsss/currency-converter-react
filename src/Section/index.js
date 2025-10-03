import "./style.css";

const Section = ({ body }) => {
    return (
        <section className="section">
            <div>
                {body}
            </div>
        </section>
    )
};

export default Section;