import { useSearchParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const Edit = () => {
  const [params] = useSearchParams();
  const [captions, setCaptions] = useState([]);

  const updateCaption = (e, index) => {
    const text = e.target.value || "";

    setCaptions(
      captions.map((c, i) => {
        if (index === i) {
          return text;
        } else return c;
      })
    );
  };

  const generateMeme = () => {
    const formData = new FormData();

    formData.append("username", "eyjkxpd");
    formData.append("password", "eyjkxpd049");
    formData.append("template_id", params.get("id"));
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((res) => {
      res.json().then((res) => {
        // navigate(res.data.page_url, { replace: true })
        window.location.replace(res.data.page_url);
      });
    });
  };

  useEffect(() => {
    const boxCount = parseInt(params.get("box_count"));

    if (!isNaN(boxCount) && boxCount > 0) {
      setCaptions(Array(boxCount).fill(""));
    }
  }, [params]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <figure>
              <img src={params.get("url")} alt="image" width={400} />
            </figure>
          </Col>
          <Col>
            {captions.map((c, index) => (
              <div className="my-3">
                <label htmlFor={index}>Add Text {index + 1}</label>
                <input
                  key={index}
                  className="form-control"
                  id={index}
                  type="text"
                  placeholder="Add Text"
                  onChange={(e) => updateCaption(e, index)}
                />
              </div>
            ))}
            <Button size="lg" onClick={generateMeme}>Generate</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
