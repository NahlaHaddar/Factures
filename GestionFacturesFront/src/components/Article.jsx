import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

import { getArticles, saveArticle, updateArticle } from "../api/ArticleService";

const ArticleManager = () => {
  const [articles, setArticles] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [articleCourant, setArticleCourant] = useState({});
  const [nouveau, setNouveau] = useState({
    id: "",
    code: "",
    nom: "",
    prixUnitaire: "",
  });

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await getArticles();
      setArticles(response.data);
    } catch (error) {
      console.error("Error loading articles:", error);
    }
  };

  const handleEditClick = (article) => {
    setArticleCourant(article);
    setShowEditModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleEditSave = async () => {
    try {
      await updateArticle(articleCourant);
      setShowEditModal(false);
      loadArticles();
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  const handleAddSave = async () => {
    try {
      await saveArticle(nouveau);
      setShowAddModal(false);
      loadArticles();
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="container">
            <h3>Liste des articles ({articles.length})</h3>
            <Button
              variant="primary"
              className="mb-3 float-right"
              onClick={handleAddClick}
            >
              <i className="bi bi-plus-circle"></i> Ajouter Article
            </Button>
          </div>
        </header>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Code</th>
                <th>Nom</th>
                <th>Prix Unitaire</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles?.length > 0 &&
                articles.map((article) => (
                  <tr key={article.id}>
                    <td>{article.code}</td>
                    <td>{article.nom}</td>
                    <td>{article.prixUnitaire}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEditClick(article)}
                      >
                        <i className="bi bi-pencil"></i> Modifier
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          {/* Edit Modal */}
          <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier Article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formcode">
                  <Form.Label>Code</Form.Label>
                  <Form.Control
                    type="text"
                    value={articleCourant.code}
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="formNom">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    value={articleCourant.nom}
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="formPrice">
                  <Form.Label>Prix Unitaire</Form.Label>
                  <Form.Control
                    type="number"
                    value={articleCourant.prixUnitaire}
                    onChange={(e) =>
                      setArticleCourant({
                        ...articleCourant,
                        prixUnitaire: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowEditModal(false)}
              >
                Annuler
              </Button>
              <Button variant="primary" onClick={handleEditSave}>
                Enregistrer
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Add Modal */}
          <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter Article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formCode">
                  <Form.Label>Code</Form.Label>
                  <Form.Control
                    type="text"
                    value={nouveau.code}
                    onChange={(e) =>
                      setNouveau({ ...nouveau, code: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    value={nouveau.nom}
                    onChange={(e) =>
                      setNouveau({ ...nouveau, nom: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formPrice">
                  <Form.Label>Prix Unitaire</Form.Label>
                  <Form.Control
                    type="number"
                    value={nouveau.prixUnitaire}
                    onChange={(e) =>
                      setNouveau({
                        ...nouveau,
                        prixUnitaire: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowAddModal(false)}
              >
                Annuler
              </Button>
              <Button variant="primary" onClick={handleAddSave}>
                Enregistrer
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ArticleManager;
