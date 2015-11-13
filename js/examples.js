/**
 *  Example of assert
 */
test1=function(){

    this.execute=function(){

        console.clear();
        var nullVar=null;
        console.assert(document.querySelector('body'), "Missing 'body' element");//ok
        console.assert(nullVar=='undefined', "nullVar is not undefined");//errir

    };

};

/**
 * Example of count
 */
test2=function(){

    this.execute=function(){

        console.clear();
        console.count("The method execute has been called");

    };

};

/**
 * Example of error
 */
test3=function(){

    this.execute=function(){

        console.clear();
        console.error("ss");

    };

};


/**
 * Example of group
 */
test4=function(){

    this.execute=function(){

        var var1={a:1,b:2};
        var var2="Hello";
        console.clear();
        console.group("Information of the method");
            console.group("This");
            console.info(this);
            console.groupEnd();
        console.info(var1);
        console.info(var2);
        console.groupEnd();

    };

};

/**
 * Example of time
 */
test5=function(){

    this.execute=function(){
        console.clear();
        console.time("Test for");

        for(var cont=0;cont<700;cont++){

        }
        console.timeEnd("Test for");

    };

};


/**
 * Example of trace
 */
test6=function(){

    this.execute=function(){
        console.clear();
        console.trace(this);
    };

};


/**
 * Example fo table
 */
test7=function(){

    this.execute=function(){

        console.table([{a:1, b:2, c:3}, {a:"value", b:false, c:undefined},{a:" new value", b:null, c:""}]);
        console.table([[100,200,300], [400,500,600]]);
        function Player(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        var team = {};
        team.center =       new Player("Dwight", "Howard", 29);
        team.powerForward = new Player("Timothy", "Duncan", 39);
        team.pointGuard =   new Player("Jason", "Williams", 39);
        team.smallForward = new Player("Lebron", "James", 30);
        team.shootingGuard =new Player("Dwyane", "Wade", 33);
        console.table(team, ["firstName", "lastName", "age"]);

    };

};