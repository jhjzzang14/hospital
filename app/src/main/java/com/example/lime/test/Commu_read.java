package com.example.lime.test;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

/**
 * Created by lime on 2016-05-26.
 */
public class Commu_read extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.commu_read_layout);

        final Button btn_write = (Button)findViewById(R.id.commuwrite);
        btn_write.setOnClickListener(new View.OnClickListener()  {
            public void onClick(View view) {
                Intent intent = new Intent(Commu_read.this, Commu_write.class);

                view = Tab_community.communityHGroup.getLocalActivityManager().startActivity("Commu_write",
                        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                Tab_community.communityHGroup.replaceView(view);
            }
        });
    }
    @Override
    public void onBackPressed() {
        Tab_community parent = ((Tab_community)getParent());
        parent.onBackPressed();
    }
}
