# Instrumentl 
Create and share beats with the Instrumentl Beat Pad

## Docker Sandbox

### Project Installation

1. Clone the repo
    ```bash
    git clone https://github.com/craigharvi3/instrumentl.git
    ```

### Docker Sandbox Setup
1. If you do not have Docker installed already, install it from [here](https://www.docker.com/community-edition#/download)

2. Modify `/etc/hosts` file on your host machine by mapping the loopback address `127.0.0.1` to `local.instrumentl.co.uk`.

    ```bash
    ##
    # Host Database
    #
    # localhost is used to configure the loopback interface
    # when the system is booting.  Do not change this entry.
    ##
    127.0.0.1	localhost instrumentl.bbc.co.uk
    255.255.255.255	broadcasthost
    ::1		localhost
    ```
    
3. Start the Docker daemon

4. Make sure to be in the root directory of the repo and create the sandbox by running `make docker-build`

5. Start the sandbox: `make docker-run`

6. Nagivate to `http://local.instrumentl.co.uk` to view the project

7. `make docker-run` will start the server with Nodemon, which will watch for changes in the code and refresh. If you want to watch for client changes, you can just open up a new window and run `yarn start:client`.


### Assets

All assets have a year long cache life
```
Cache-Control: max-age=31536000
```