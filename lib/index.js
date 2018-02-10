$(document).ready(function(){
    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
});

function homeLine() {
  document.getElementById('quote-timeline').innerHTML = ''
  $('#quote-timeline').append(`
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people.png">
        <div class="header">
          Tobias Kusnaman
        </div>
        <div class="meta">
          Quotee level 18
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people-2.png">
        <div class="header">
          Hafizh Abdillah
        </div>
        <div class="meta">
          Quotee level 20
        </div>
        <div class="description">
          "But man is not made for defeat. A man can be destroyed but not defeated"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/woman.png">
        <div class="header">
          Siti Nurharis
        </div>
        <div class="meta">
          Quotee level 5
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people.png">
        <div class="header">
          Tobias Kusnaman
        </div>
        <div class="meta">
          Quotee level 18
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people-2.png">
        <div class="header">
          Hafizh Abdillah
        </div>
        <div class="meta">
          Quotee level 20
        </div>
        <div class="description">
          "But man is not made for defeat. A man can be destroyed but not defeated"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/woman.png">
        <div class="header">
          Siti Nurharis
        </div>
        <div class="meta">
          Quotee level 5
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people.png">
        <div class="header">
          Tobias Kusnaman
        </div>
        <div class="meta">
          Quotee level 18
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people-2.png">
        <div class="header">
          Hafizh Abdillah
        </div>
        <div class="meta">
          Quotee level 20
        </div>
        <div class="description">
          "But man is not made for defeat. A man can be destroyed but not defeated"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/woman.png">
        <div class="header">
          Siti Nurharis
        </div>
        <div class="meta">
          Quotee level 5
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Like</div>
          <div class="ui basic red button">Dislike</div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
    `)
}

function yourLine() {
  document.getElementById('quote-timeline').innerHTML = ''
  $('#quote-timeline').append(`
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people.png">
        <div class="header">
          Fuadi Naqi
        </div>
        <div class="meta">
          Quotee level 100
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Edit</div>
          <div class="ui basic red button">Delete</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people.png">
        <div class="header">
          Fuadi Naqi
        </div>
        <div class="meta">
          Quotee level 100
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Edit</div>
          <div class="ui basic red button">Delete</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people.png">
        <div class="header">
          Fuadi Naqi
        </div>
        <div class="meta">
          Quotee level 100
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Edit</div>
          <div class="ui basic red button">Delete</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/assets/people.png">
        <div class="header">
          Fuadi Naqi
        </div>
        <div class="meta">
          Quotee level 100
        </div>
        <div class="description">
          "I love you the more in that I believe you had liked me for my own sake and for nothing else"
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Edit</div>
          <div class="ui basic red button">Delete</div>
        </div>
      </div>
    </div>
    `)
}

$('.special.cards .image').dimmer({
  on: 'hover'
});
