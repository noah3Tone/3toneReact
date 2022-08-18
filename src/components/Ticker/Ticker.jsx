import "./Ticker.scss"

const Ticker = (props) => {

    const { tickerText, logo, link } = props;

    

    return(
        <a class="ticker" href={link}>
            <div class="ticker__slider">
                <div>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                </div>
                <div>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                </div>
            </div>
            <div class="ticker__slider2">
                <div>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                </div>
                <div>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                    <span class="hitem">{tickerText}</span>
                </div>
            </div>
            
        </a>
        
    )
}
export default Ticker;

/*
<a class="amplify-ticker" href="https://amplify.link/">
			<div class="scroll text1">
				<div>
					<img class="amp-red" src="<?php echo get_template_directory_uri().'/img/AMPLIFY_red.png'?>" alt="3tone Music"> <span> GET SMART LINKS WITH AMPLIFY </span><span class="iconify" data-icon="la:external-link-square-alt"></span>
					<img class="amp-red" src="<?php echo get_template_directory_uri().'/img/AMPLIFY_red.png'?>" alt="3tone Music"> <span> GET SMART LINKS WITH AMPLIFY </span><span class="iconify" data-icon="la:external-link-square-alt"></span>
					<img class="amp-red" src="<?php echo get_template_directory_uri().'/img/AMPLIFY_red.png'?>" alt="3tone Music"> <span> GET SMART LINKS WITH AMPLIFY </span><span class="iconify" data-icon="la:external-link-square-alt"></span>
				</div>
				<div>
					<img class="amp-red" src="<?php echo get_template_directory_uri().'/img/AMPLIFY_red.png'?>" alt="3tone Music"> <span> GET SMART LINKS WITH AMPLIFY </span><span class="iconify" data-icon="la:external-link-square-alt"></span>
					<img class="amp-red" src="<?php echo get_template_directory_uri().'/img/AMPLIFY_red.png'?>" alt="3tone Music"> <span> GET SMART LINKS WITH AMPLIFY </span><span class="iconify" data-icon="la:external-link-square-alt"></span>
					<img class="amp-red" src="<?php echo get_template_directory_uri().'/img/AMPLIFY_red.png'?>" alt="3tone Music"> <span> GET SMART LINKS WITH AMPLIFY </span><span class="iconify" data-icon="la:external-link-square-alt"></span>
				</div>
			</div>
		</a>
*/