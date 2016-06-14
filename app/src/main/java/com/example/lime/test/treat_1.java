package com.example.lime.test;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;


/**
 * Created by lime on 2016-05-23.
 */
public class treat_1 extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.treat_1_layout);

        final Button btn_next = (Button)findViewById(R.id.treatment);
        btn_next.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                Intent intent = new Intent(treat_1.this, treat_2.class);

                view = Tab_treatcheck.treatcheckHGroup.getLocalActivityManager().startActivity("treat_2",
                        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                Tab_treatcheck.treatcheckHGroup.replaceView(view);
            }
        });


    }

}
