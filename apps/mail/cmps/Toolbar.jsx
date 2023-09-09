import { emailService } from '../../../services/email.service.js'
export function Toolbar({ onBack, onRemoveMail, mailId }) {
    const handleRemove = () => {
        onRemoveMail(mailId)
        onBack()
    }

    console.log('mailId', mailId);
    console.log('emailsNow', emailService.query());

    return (
        <section className="toolbar-container">
            <button className="backBtn" onClick={onBack}> ← </button>
            <button onClick={handleRemove}>Remove </button>   
        </section>
    )
}



