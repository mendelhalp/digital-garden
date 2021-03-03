import { useContext, useEffect, useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import isEnterPressed from '../../utils/IsEnterPressed';
import createNewDafKesher from '../../utils/createNewDafKesher';
import updateDafKesherDetails from '../../utils/updateDafKesherDetails';
import createNewGallery from '../../utils/createNewGallery';
import updateGalleryDetails from '../../utils/updateGalleryDetails';
import ActiveGardenContext from '../../utils/ActiveGardenContext';
import DafKesherModel from '../../model/DafKesherModel';
import GalleryModel from '../../model/GalleryModel';

const MainCardEditorModal = (props) => {
    const {data, cardType, showModal, handleUpdate, closeModal, cleanDataToEdit} = props;
    const activeGarden = useContext(ActiveGardenContext);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [showError, setShowError] = useState(false);
    
    useEffect(() => { 
        if (typeof data === 'object') {                     //if editing existing content - filling the fields with the original data 
            setTitle(data.title);
            if (cardType === 'dafKesher') {

                const date = data.date.toLocaleString().split('.');                             //converting dafKesher date to simple format 
                const viewDate = `${date[2].split(',')[0]}-${date[1].length === 1 ? '0' + 
                    date[1] : date[1]}-${date[0].length === 1 ? '0' + date[0] : date[0]}`;
                setDate(viewDate);
            }
        } else {
            setTitle('');
            setDate('');
        }
    }, [data, cardType]);
    
    function close () {
        setTitle('');
        setDate('');        
        closeModal();
        setShowError(false);
        cleanDataToEdit();
    }

    async function onSave() {
        if (cardType === 'dafKesher') {                         //detecting the type of Card (dafKesher/gallery)
            if (!(title && date)) {
                setShowError(true);
            } else {
                let dafKesher;
                const action = data ? 'update' : 'add';
                if (!data) {                                 //if adding new content - creating new row in the database
                    dafKesher = await createNewDafKesher(activeGarden.parseGarden, title, date);
                } else {                                            //if updating existing content - updating the data in the database
                    dafKesher = await updateDafKesherDetails(data.id, title, date, data.isReady);
                }
                handleUpdate(action, new DafKesherModel(dafKesher));
                close();
            }
        } else if (cardType === 'gallery') {
            if (!title) {
                setShowError(true);
            } else {
                let gallery;
                const action = data ? 'update' : 'add';
                if (!data) {
                    gallery = await createNewGallery(activeGarden.parseGarden, title);
                } else {
                    gallery = await updateGalleryDetails(data.id, title);
                }
                const galleryToSend = new GalleryModel(gallery);
                if (data) {
                    galleryToSend.images = data.images;             // when only updating gallery details - copy the images data
                }
                handleUpdate(action, galleryToSend);
                close();
            }
        }
    }

    function ifEnterPressed (event) {                           //detecting if Enter pressed - and executing login if all fields that required are filled
        if (cardType === 'dafKesher') {
            if (isEnterPressed(event) && title && date) {
                onSave();
            }
        } else if (cardType === 'gallery') {
            if (isEnterPressed(event) && title) {
                onSave();
            }
        }
    }

    let modalTitle;                                             //setting the modal title depending on the situation (add/edit + dafKesher/gallery)
    if (cardType === 'dafKesher') {
        modalTitle = data ? 'עריכת פרטי דף קשר' : 'יצירת דף קשר חדש';
    } else if (cardType === 'gallery') {
        modalTitle = data ? 'עריכת פרטי גלריה' : 'יצירת גלריה חדשה';
    }

    return (
        <Modal size='sm' show={showModal} onHide={close} centered className='c-main-card-editor-modal'>
            <Modal.Header>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='title'>
                        <Form.Label>כותרת</Form.Label>
                        <Form.Control type="text" value={title} onChange={e => { setTitle(e.target.value) }} onKeyPress={ifEnterPressed} />
                    </Form.Group>
                    {cardType === 'dafKesher' ? <Form.Group controlId='date'>
                        <Form.Label>תאריך</Form.Label>
                        <Form.Control type="date" value={date}
                            onChange={e => { setDate(e.target.value) }} onKeyPress={ifEnterPressed} />
                    </Form.Group> : null}
                </Form>
                {showError ? <Alert variant="danger">נא למלא את כל השדות</Alert> : null}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>סגירה</Button>
                <Button variant="warning" onClick={onSave}>שמירה</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MainCardEditorModal;
