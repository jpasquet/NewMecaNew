

class Etape {
  static EtapeChoixVideo = new Etape('ChoixVideo');
  static EtapeFixerAxes = new Etape('FixerAxes');
  static EtapeFixerDistanceA= new Etape('FixerDistanceA');
  static EtapeFixerDistanceB= new Etape('FixerDistanceB');
  static EtapeFixerDistanceC= new Etape('FixerDistanceC');
  static EtapeFixerDistance= new Etape('FixerDistance');

  static EtapeChronophotographie = new Etape('Chronophotographie');

  constructor(name) {
    this.name = name;
  }
  toString() {
    return this.name;
  }
}

class Axe {
  static Axe_X_Y   = new Axe(1);
  static Axe_Y_X   = new Axe(2);
  static Axe_MX_Y  = new Axe(3);
  static Axe_MY_X  = new Axe(4);
  static Axe_X_MY  = new Axe(5);
  static Axe_Y_MX  = new Axe(6);
  static Axe_MX_MY = new Axe(7);
  static Axe_MY_MX = new Axe(8);

  constructor(id) {
    this.id = id;
  }
  
  toString() {
    return this.id;
  }
  
  inverseXY(){
  	switch (this.id) {
  		case Axe.Axe_X_Y.id:
    		this.id = Axe.Axe_Y_X.id;
    	break;
    	case Axe.Axe_Y_X.id:
    		this.id = Axe.Axe_X_Y.id;
    	break;
    	case Axe.Axe_MX_Y.id:
    		this.id = Axe.Axe_Y_MX.id;
    	break;
    	case Axe.Axe_MY_X.id:
    		this.id = Axe.Axe_X_MY.id;
    	break;
    	case Axe.Axe_X_MY.id:
    		this.id = Axe.Axe_MY_X.id;
    	break;
    	case Axe.Axe_Y_MX.id:
    		this.id = Axe.Axe_MX_Y.id;
    	break;
    	case Axe.Axe_MX_MY.id:
    		this.id = Axe.Axe_MY_MX.id;
    	break;
    	case Axe.Axe_MY_MX.id:
    		this.id = Axe.Axe_MX_MY.id;
    	break;
	}
  }
  
inverseX(){
  	switch (this.id) {
  		case Axe.Axe_X_Y.id:
    		this.id = Axe.Axe_MX_Y.id;
    	break;
    	case Axe.Axe_Y_X.id:
    		this.id = Axe.Axe_MY_X.id;
    	break;
    	case Axe.Axe_MX_Y.id:
    		this.id = Axe.Axe_X_Y.id;
    	break;
    	case Axe.Axe_MY_X.id:
    		this.id = Axe.Axe_Y_X.id;
    	break;
    	case Axe.Axe_X_MY.id:
    		this.id = Axe.Axe_MX_MY.id;
    	break;
    	case Axe.Axe_Y_MX.id:
    		this.id = Axe.Axe_MY_MX.id;
    	break;
    	case Axe.Axe_MX_MY.id:
    		this.id = Axe.Axe_X_MY.id;
    	break;
    	case Axe.Axe_MY_MX.id:
    		this.id = Axe.Axe_Y_MX.id;
    	break;
	}
  }
  
  inverseY(){
  	switch (this.id) {
  		case Axe.Axe_X_Y.id:
    		this.id = Axe.Axe_X_MY.id;
    	break;
    	case Axe.Axe_Y_X.id:
    		this.id = Axe.Axe_Y_MX.id;
    	break;
    	case Axe.Axe_MX_Y.id:
    		this.id = Axe.Axe_MX_MY.id;
    	break;
    	case Axe.Axe_MY_X.id:
    		this.id = Axe.Axe_MY_MX.id;
    	break;
    	case Axe.Axe_X_MY.id:
    		this.id = Axe.Axe_X_Y.id;
    	break;
    	case Axe.Axe_Y_MX.id:
    		this.id = Axe.Axe_Y_X.id;
    	break;
    	case Axe.Axe_MX_MY.id:
    		this.id = Axe.Axe_MX_Y.id;
    	break;
    	case Axe.Axe_MY_MX.id:
    		this.id = Axe.Axe_MY_X.id;
    	break;
	}
  }
  
  
  
  
}




class User{

	constructor(){
		this.current_step = Etape.EtapeChoixVideo;
		this.axe = new Axe(Axe.Axe_X_Y.id);
	}
	
	actuAxe(){
		$( "#draggable_axis img" ).attr("src", "images/axis_"+this.axe.id+".png");
	}
	
	inverseXY(){
		this.axe.inverseXY();
		this.actuAxe();
	}
	inverseY(){
		this.axe.inverseY();
		this.actuAxe();
	}	
	inverseX(){
		this.axe.inverseX();
		this.actuAxe();
	}
	
	changeStep(newStep){
		this.current_step = newStep;
		switch (this.current_step.name) {
  			case Etape.EtapeChoixVideo.name:
				return;
    		break;
    		case Etape.EtapeFixerAxes.name:
    		    $(".ChooseVideoDiv").hide();
    			$(".MenuPartDiv").show();
				$(".VideoPartDiv").show();
				$( "#draggable_axis" ).draggable({scroll: false,drag: function() {}});
				$( "#draggable_axis" ).css("top", "-"+ $("#draggable_axis").parent().height()-80+"px");
				
				//$( "#obs_div" ).css("top", "-"+ $("#draggable_axis").css("top")+"px");

				
					
    		break;  		
    		case Etape.EtapeFixerDistanceA.name:
    			$( "#choix_axe"  ).attr("disabled", true);
				$( "#draggable_axis" ).draggable( "disable" );
				$( ".select_choix_axe" ).attr('disabled', 'disabled');
        		$( "#choix_d" ).attr("disabled", false);
        		$( ".select_choix_axe" ).attr("disabled", true);
        		$("#choix_axe").addClass("isCheck");

        		
    		break;  		
    		case Etape.EtapeFixerDistanceB.name:
    			 $( "#dialog-message" ).dialog({
      				modal: true,
      		  		position: { my: 'top', at: 'top+350' },
      				buttons: {
       			 		Ok: function() {
         		 			$( this ).dialog( "close" );
        				}
      					}
    			});
    		break;  
    		case Etape.EtapeFixerDistanceC.name:
				alert("Cliquez sur le second point"); 
    		break;  
    		
    		case Etape.EtapeFixerDistance.name:
            	unite_d = prompt("Entrez la distance physique entre ces deux points : ");
				unite_d=unite_d.replace(",", '.');
            	unite_d=unite_d.replace("m", '');
            	unite_d = parseFloat(unite_d);
            
            	$("#choix_d").addClass("isCheck");
            	$( "#choix_d" ).attr("disabled", true);
            	$( "#choix_debut" ).attr("disabled", false);
            	$( "#reset_but" ).attr("disabled", false);
    		break;  
    		
    		

    		
    		case Etape.EtapeChronophotographie.name:
    			$( "#choix_debut" ).attr("disabled", true);
    			
    
  
    			
    			
    			
        		$( "#obs" ).append("<tr><td>Temps (s) </td><td> Position horizontale (m) </td><td> Position verticale (m) </td></tr>");
        		$("#choix_debut").addClass("isCheck");

        		alert("Cliquez sur la vidéo pour chaque position de l'objet. La vidéo avancera automatiquement après chaque clic.");
    		break;
    	}
	}
	    		
}