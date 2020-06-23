(function() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('95ec86c745791e6b1b5f', {
      cluster: 'us2',
      encrypted: true
    });

    var channel = pusher.subscribe('my-channel');
    var messages = document.getElementById('messages');
    channel.bind('my-event', newComments);
    document.querySelector('#mesSender').addEventListener('submit', addComment);

    function newComments(data) {
      var el = document.createElement('div');
      el.innerHTML = data.message + '<small> '+ data.name+'</small>';
      messages.appendChild(el);
    }


    function addComment(event) {
      event.preventDefault();
      var newComment = {
        "name" : document.getElementById('userName').value,
        "message": document.getElementById('newMessage').value
      }
      console.log(newComment);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/comment');
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.onreadystatechange = function() {
        if(xhr.readyState != 4 || xhr.status != 200) return;
        console.log(xhr.responseText);
      }
      xhr.send(JSON.stringify(newComment));
    }
  })();