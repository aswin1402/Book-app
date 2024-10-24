import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addBook } from '../Slice/BookSlice';

function Dashboard() {
  const [show, setShow] = useState(false);
  const [bookName, setBookName] = useState(""); 
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null); 
  const dispatch = useDispatch(); 

  const handleClose = () => {
    setShow(false);
    setBookName(""); 
    setPrice("");
    setImage(null);
  };

  const handleShow = () => setShow(true);

  const handleAddBook = () => {
    const newBook = {
      id: Date.now(), 
      title: bookName,
      price: price,
      image: image,
    };

    dispatch(addBook(newBook)); 
    handleClose();
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <h1>Dashboard</h1>
      <div className="container-fluid mt-4">
        <div className="">
          <button className="btn btn-primary" onClick={handleShow}>
            Add Book
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-evenly">
            <label className="p-4">
              {image ? (
                <img src={image} alt="Preview" style={{ width: "100px", height: "150px" }} />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0ydDiYMYriRcJDdqE8NZxnRisT4XZmc7AQ&s"
                  alt="Default"
                  style={{ width: "100px", height: "150px" }}
                />
              )}
              <input type="file" style={{ display: "none" }} onChange={handleImageChange} />
            </label>
            <div className="">
              <input
                type="text"
                className="form-control m-3"
                placeholder="Book name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
              <input
                type="text"
                className="form-control m-3"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddBook}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dashboard;