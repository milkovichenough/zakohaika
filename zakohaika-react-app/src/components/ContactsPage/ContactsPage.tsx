export const ContactsPage = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <section id="container">
            <div className="wrap-container">
                <section className="content-box zerogrid">
                    <div className="row wrap-box">
                        <h3 className="t-center" >Форма Зворотнього
                            Зв'язку</h3>
                        <div className="embed-container maps">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8909.582395293382!2d24.028996882589592!3d49.834423879987305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add642c0a3f8d%3A0x9fe083bd4cd1cd7e!2z0LLRg9C70LjRhtGPINCU0YDQsNCz0L7QvNCw0L3QvtCy0LAsIDUwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1suk!2sua!4v1701637170253!5m2!1suk!2sua"
                                width="100%" height="450px" frameBorder="0" ></iframe>
                        </div>
                        <div id="contact_form">
                            <form name="form1" id="ff" onSubmit={handleSubmit}>
                                <label className="row">
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                            <input type="text" name="name" id="name" placeholder="Введіть ім'я"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                            <input type="email" name="email" id="email" placeholder="Введіть пошту"
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                            <input type="text" name="subject" id="subject" placeholder="Тема"
                                                   required/>
                                        </div>
                                    </div>
                                </label>
                                <label className="row">
                                    <div className="wrap-col">
										<textarea name="message" id="message" className="form-control" rows={4}
                                                  cols={25} required
                                                  placeholder="Опишіть питання"></textarea>
                                    </div>
                                </label>
                                <center><input className="sendButton" type="submit" name="submitcontact"
                                               value="Надіслати" /></center>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    );
}
