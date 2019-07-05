/*  
    Copyright (C) 2019 Ethan/TheDragonFire961.
    This file is part of Quickstarter.
	
    Quickstarter is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    Quickstarter is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with Quickstarter.  If not, see <https://www.gnu.org/licenses/>.
*/

// The main wrapper class for Quickloader.
class Loader {
    // Customers, this is where you can set your custom parameters.
    user_parameters() {
        this.logo = "";
        this.target_id = "quickstarter";
	    this.loader_mode = "manual_start" // Modes: auto, manual, manual_start_client, manual_start_loader.
        this.splash_mode = "auto" // Modes: auto, diagnostic, none, standard.
        this.log_type = "html"; // Log types: none, console, html, all.
        // files_to_load = ""
    }
    constructor() {
        this.user_parameters();
        // Try constructing the relevant tags
        try {
            this.target = document.getElementById(this.target_id);
            this.target.innerHTML = '<div class="quickstarter_body" id="quickstarter_body"></div>
            this.body = document.getElementById("quickstarter_body");
            this.body.innerHTML = '<div class="quickstarter_nodisplay" id="quickstarter_console"></div>';
            this.console = document.getElementById("quickstarter_console");
	        this.date = new Date();
        } catch (error) {
	        // Well, shit, we don't have a console yet, so...
            alert("A fatal exception occured while initialising the loader. Please report this error code to this website's owner: " + error);
        }
        // Try constructing classes we need 
        try {
	        this.Log('Initialiser', 'INFO', 'Console log intialisation complete.');
            this.Log('Initialiser', 'INFO', 'Constructing class dependencies');
        } catch (error) {
            this.Log('Initialiser', 'ERROR', 'Error initialising class dependencies: ' + error);
        }
    }
    Initialise() {
        // Create a list of files
    }
    Log(thread, level, message) {
        var log_message = ('0' + this.date.getDay()).slice(-2) + '-' + ('0' + (this.date.getMonth() + 1)).slice(-2) + '-' + this.date.getFullYear() + ' ' + ('0' + this.date.getHours()).slice(-2) + ':' + ('0' + this.date.getMinutes()).slice(-2) + ':' + ('0' + this.date.getSeconds()).slice(-2);
        log_message += ' ';
        log_message += '[' + thread + '] ';
        log_message += '[' + level + '] ';
        log_message += message;
        // Write to HTML, if that is enabled.
        if (this.log_type === "html" || this.log_type === "all") {
            this.console = log_message + '<br>';
        }
        if (this.log_type === "html" || this.log_type === "all") {
            this.console = log_message + '<br>';
        }
    }
}
