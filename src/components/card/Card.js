import React from 'react';
import cardimg from '../../assets/deal-2.jpg';

function Card() {
    return (
        <div className="col-md-4 mb-4">
            <div class="card">
                <img src={ cardimg } class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Add to Bucket</a>
                </div>
            </div>
            {/* /.card */}
        </div>
    )
}

export default Card