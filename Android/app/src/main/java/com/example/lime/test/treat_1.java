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
    String name;
    int no;
    String birthday;
    String address;
    String phone;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.treat_1_layout);

        Intent getIntent = getIntent();
         name = getIntent.getStringExtra("name");
         no = getIntent.getIntExtra("no",1);
         birthday = getIntent.getStringExtra("birthday");
         address = getIntent.getStringExtra("address");
         phone = getIntent.getStringExtra("phone");

        final Button btn_next = (Button)findViewById(R.id.treatment);
        btn_next.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                Intent intent = new Intent(treat_1.this, treat_2.class);

                intent.putExtra("name",name);
                intent.putExtra("no",no);
                intent.putExtra("birthday",birthday);
                intent.putExtra("address",address);
                intent.putExtra("phone",phone);

                view = Tab_treatcheck.treatcheckHGroup.getLocalActivityManager().startActivity("treat_2",
                        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                Tab_treatcheck.treatcheckHGroup.replaceView(view);
            }
        });


    }

}
