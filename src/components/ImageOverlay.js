import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export default function ImgOverlay() {
    return (
        <Card className="bg-dark text-dark">
            <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
                alt="Card image"
                style={{
                    display: "block",
                    position: "relative",
                    width: "auto",
                    height: "400px"
                }}
            />
            <Card.ImgOverlay>
                <Card.Title style={{ fontSize: "40px" }}>Order groceries for delivery or pickup today</Card.Title>
                <Card.Text>
                    Whatever you want from local stores, brought right to your door.
                </Card.Text>
                < input type="text" placeholder="Enter your address" style={{ position: "absolute" }}>
                </input>
            </Card.ImgOverlay>
        </Card>
    );
}
